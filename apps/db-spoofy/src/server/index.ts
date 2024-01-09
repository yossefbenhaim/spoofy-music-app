import { spoofyQueryRouter } from './Routers/spoofyQueryRouter';
import { publicProcedure, router } from './trpc';
import { spoofyMutationRouter } from './Routers/spoofyMutationRouter';
export const appRouter = router({
  spoofyQueryRouter: spoofyQueryRouter,
  spoofyMutationRouter: spoofyMutationRouter,
  health: publicProcedure.query(() => {
    return 'ok';
  }),
});

export type AppRouter = typeof appRouter;
