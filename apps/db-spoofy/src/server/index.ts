import { spoofyRouter } from './Routers/spoofyRouter';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  spoofyRouter: spoofyRouter,
  health: publicProcedure.query(() => {
    return 'ok';
  }),
});

export type AppRouter = typeof appRouter;
