import {
  LoginUser,
  LogoutUser,
  Mutation,
  RefreshAccessToken,
  UserInput,
} from '@spoofy/spoofy-types';
import { GET_USER_BY_EMAIL } from '../queries/queries/getUserById';
import { USER_REGISTRATION } from '../queries/mutations/userRegistration';
import { mainClient } from '../apolloConfig/apolloConnection';
import { TRPCError } from '@trpc/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import redis from '../redis/redisClient';
dotenv.config();

const NX_JWT_SECRET = process.env['NX_JWT_SECRET'] as string;
const ACCESS_TOKEN_EXPIRY = '15m';
const REFRESH_TOKEN_EXPIRY = 60 * 60 * 24 * 7;

const generateTokens = (userId: string) => {
  const accessToken = jwt.sign({ id: userId }, NX_JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });
  const refreshToken = jwt.sign({ id: userId }, NX_JWT_SECRET, {
    expiresIn: '7d',
  });

  return { accessToken, refreshToken };
};

export const registerUserController = async (input: UserInput) => {
  const { id, userName, email, password, coordinates } = input;
  try {
    const cachedUser = await redis.get(`user:${email}`);
    if (cachedUser) {
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'User already exists (cache)',
      });
    }

    const existingUser = await mainClient.query({
      query: GET_USER_BY_EMAIL,
      variables: { email: email },
    });

    const userExists = existingUser.data?.allUsers?.nodes?.[0]?.email;

    if (userExists) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await redis.set(
        `user:${email}`,
        JSON.stringify({ userName, email, password: hashedPassword })
      );
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await redis.set(
      `user:${email}`,
      JSON.stringify({ id, userName, email, password: hashedPassword })
    );

    const response = await mainClient.mutate<
      Required<Pick<Mutation, 'createUser'>>
    >({
      mutation: USER_REGISTRATION,
      variables: {
        userName,
        email,
        password: hashedPassword,
        coordinates,
      },
    });

    const createUser = response.data?.createUser?.user;
    if (!createUser) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'User Creation Failed',
      });
    }
    const { accessToken, refreshToken } = generateTokens(email);

    await redis.set(
      `refresh:${email}`,
      refreshToken,
      'EX',
      REFRESH_TOKEN_EXPIRY
    );
    return { user: createUser, accessToken, refreshToken };
  } catch (error) {
    console.error('Error registering user:', error);
    if (error instanceof TRPCError) throw error;
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Registering failed, please try again',
    });
  }
};

export const loginUserController = async (input: LoginUser) => {
  const { email, password } = input;

  try {
    const cachedUser = await redis.get(`user:${email}`);
    if (cachedUser) {
      const user = JSON.parse(cachedUser);
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid password (cash)',
        });
      }

      const { accessToken, refreshToken } = generateTokens(user.id);

      await redis.set(
        `refresh:${email}`,
        refreshToken,
        'EX',
        REFRESH_TOKEN_EXPIRY
      );
      return { accessToken, refreshToken };
    } else {
      const existingUser = await mainClient.query({
        query: GET_USER_BY_EMAIL,
        variables: { email },
      });

      const user = existingUser.data?.allUsers?.nodes?.[0];

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        });
      } else {
        const { userName, email, password } = user;
        await redis.set(
          `user:${email}`,
          JSON.stringify({ userName, email, password })
        );
      }
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Invalid password',
        });
      }

      const { accessToken, refreshToken } = generateTokens(email);

      await redis.set(
        `refresh:${email}`,
        refreshToken,
        'EX',
        REFRESH_TOKEN_EXPIRY
      );
      return { accessToken, refreshToken };
    }
  } catch (error) {
    console.error('Error logging in user:', error);

    if (error instanceof TRPCError) throw error;

    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Login failed, please try again',
    });
  }
};

export const refreshAccessTokenController = async (
  input: RefreshAccessToken
) => {
  const { email, refreshToken } = input;

  try {
    const storedRefreshToken = await redis.get(`refresh:${email}`);

    if (!storedRefreshToken || storedRefreshToken !== refreshToken) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Invalid or expired refresh token',
      });
    }

    const accessToken = jwt.sign({ id: email }, NX_JWT_SECRET, {
      expiresIn: '15m',
    });

    return { accessToken };
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to refresh access token',
    });
  }
};

export const logoutUserController = async (input: LogoutUser) => {
  const { email } = input;
  try {
    const result = await redis.del(`refresh:${email}`);

    if (result === 0) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Refresh token not found',
      });
    }

    return { message: 'Logout successful' };
  } catch (error) {
    console.error('Error logging out user:', error);

    if (error instanceof TRPCError) throw error;

    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Failed to logout, please try again',
    });
  }
};
