import {
  forgetPasswordController,
  loginUserController,
  logoutUserController,
  refreshAccessTokenController,
  registerUserController,
} from '../controllers/authenticationController';
import { router, publicProcedure } from '../tRPC/trpc';
import { z } from 'zod';
import {
  ForgetPassword,
  LoginUser,
  LogoutUser,
  RefreshAccessToken,
  UserInput,
} from '@spoofy/spoofy-types';
import { TRPCError } from '@trpc/server';
import { verifyTokenMiddleware } from '../middlewares/verifyToken';

export const authenticateRouter = router({
  register: publicProcedure
    .input(z.custom<UserInput>())
    .mutation(async ({ input }) => registerUserController(input)),
  login: publicProcedure
    .input(z.custom<LoginUser>())
    .mutation(async ({ input }) => loginUserController(input)),
  refreshAccessToken: publicProcedure
    .input(z.custom<RefreshAccessToken>())
    .mutation(async ({ input }) => refreshAccessTokenController(input)),
  logoutUser: publicProcedure
    .input(z.custom<LogoutUser>())
    .mutation(async ({ input }) => logoutUserController(input)),
  forgetPassword: publicProcedure
    .input(z.custom<ForgetPassword>())
    .mutation(async ({ input }) => forgetPasswordController(input)),
  validateToken: publicProcedure
    .input(
      z.object({
        token: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // const token = ctx.req.headers.authorization?.split(' ')[1];
      const { token } = input;

      if (!token) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'No token provided',
        });
      }

      const user = await verifyTokenMiddleware(token);
      return { message: 'Token is valid', user };
    }),
});
