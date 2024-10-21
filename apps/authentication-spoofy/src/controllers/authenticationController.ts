import { CreateUserInput, Mutation } from '@spoofy/spoofy-types';
import { GET_USER_BY_EMAIL } from '../queries/queries/getUserById';
import { USER_REGISTRATION } from '../queries/mutations/userRegistration';
import { Request, Response } from 'express';
import { mainClient } from '../apolloConfig/apolloConnection';
import { TRPCError } from '@trpc/server';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import redis from '../redis/redisClient';
dotenv.config();

const NX_JWT_SECRET = process.env['NX_JWT_SECRET'] as string;

const pool = new Pool({
  connectionString: 'postgres://postgres:yossef7875@localhost:5432/spoofy',
});

export const registerUserController = async (input: CreateUserInput) => {
  const { userName, email, password, coordinates } = input.user;
  try {
    const cachedUser = await redis.get(`user:${userName}`);
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
        `user:${userName}`,
        JSON.stringify({ userName, email, password: hashedPassword })
      );
      throw new TRPCError({
        code: 'CONFLICT',
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await redis.set(
      `user:${userName}`,
      JSON.stringify({ userName, email, password: hashedPassword })
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

    return createUser;
  } catch (error) {
    console.error('Error registering user:', error);
    if (error instanceof TRPCError) throw error;
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Registering failed, please try again',
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      `SELECT * FROM spoofy."Users" WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const user = result.rows[0];

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, NX_JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Login failed' });
  }
};

export const profile = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    const result = '';
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch profile' });
  }
};
