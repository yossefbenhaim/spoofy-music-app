import {
  loginUserController,
  logoutUserController,
  refreshAccessTokenController,
  registerUserController,
} from '../controllers/authenticationController';
import { router, publicProcedure } from '../tRPC/trpc';
import { z } from 'zod';
import {
  LoginUser,
  LogoutUser,
  RefreshAccessToken,
  UserInput,
} from '@spoofy/spoofy-types';

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
});
