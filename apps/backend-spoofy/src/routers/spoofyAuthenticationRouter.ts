import { trpcClient } from '../tRPC/trpcAuthentication';
import {
  UserInput,
  LoginUser,
  LogoutUser,
  RefreshAccessToken,
} from '@spoofy/spoofy-types';
import { router, publicProcedure } from '../tRPC/trpc';
import z from 'zod';

export const spoofyAuthenticationRouter = router({
  register: publicProcedure
    .input(z.custom<UserInput>())
    .mutation(async ({ input }) => {
      try {
        const result = await trpcClient.authentication.register.mutate(input);
        return result;
      } catch (error) {
        throw error;
      }
    }),
  login: publicProcedure
    .input(z.custom<LoginUser>())
    .mutation(async ({ input }) => {
      try {
        const result = await trpcClient.authentication.login.mutate(input);
        return result;
      } catch (error) {
        throw error;
      }
    }),
  logout: publicProcedure
    .input(z.custom<LogoutUser>())
    .mutation(async ({ input }) => {
      try {
        const result = await trpcClient.authentication.logoutUser.mutate(input);
        return result;
      } catch (error) {
        throw error;
      }
    }),
  forgetPassword: publicProcedure
    .input(z.custom<LogoutUser>())
    .mutation(async ({ input }) => {
      try {
        const result = await trpcClient.authentication.forgetPassword.mutate(
          input
        );
        return result;
      } catch (error) {
        throw error;
      }
    }),
  refreshAccessToken: publicProcedure
    .input(z.custom<RefreshAccessToken>())
    .mutation(async ({ input }) => {
      try {
        const result =
          await trpcClient.authentication.refreshAccessToken.mutate(input);
        return result;
      } catch (error) {
        throw error;
      }
    }),
});
