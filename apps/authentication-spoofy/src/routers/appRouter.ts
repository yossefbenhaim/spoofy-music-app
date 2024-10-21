import { publicProcedure, router } from '../tRPC/trpc';
import { authenticateRouter } from './authenticationRouter';

export const appRouter = router({
  authenticate: authenticateRouter,
  health: publicProcedure.query(() => {
    return 'ok';
  }),
});

export type AppRouter = typeof appRouter;
