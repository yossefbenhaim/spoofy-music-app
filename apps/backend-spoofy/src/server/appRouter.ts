import { spoofyQueryRouter } from './routers/spoofyQueryRouter';
import { publicProcedure, router } from './trpc';
import { spoofyMutationRouter } from './routers/spoofyMutationRouter';
import { spoofySubscriptionRouter } from './routers/spoofySubscriptionRouter';

export const appRouter = router({
  spoofyQueryRouter: spoofyQueryRouter,
  spoofyMutationRouter: spoofyMutationRouter,
  spoofySubscrptionRouter: spoofySubscriptionRouter,
  health: publicProcedure.query(() => {
    return 'ok';
  }),
});

export type AppRouter = typeof appRouter;
