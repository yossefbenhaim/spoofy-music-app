import { publicProcedure, router } from '../src/tRPC/trpc';
import { authenticateRouter } from './routers/authenticationRouter';

export const appRouter = router({
  authentication: authenticateRouter,
  health: publicProcedure.query(() => {
    return 'ok';
  }),
});

export type AppRouter = typeof appRouter;
