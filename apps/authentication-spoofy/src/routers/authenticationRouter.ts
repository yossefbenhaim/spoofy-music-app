import { registerUserController } from '../controllers/authenticationController';
import { router, publicProcedure } from '../tRPC/trpc';
import { z } from 'zod';
import { CreateUserInput } from '@spoofy/spoofy-types';

export const authenticateRouter = router({
  register: publicProcedure
    .input(z.custom<CreateUserInput>())
    .mutation(async ({ input }) => registerUserController(input)),
});
