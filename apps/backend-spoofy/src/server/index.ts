import { spoofyQueryRouter } from './Routers/spoofyQueryRouter';
import { publicProcedure, router } from './trpc';
import { spoofyMutationRouter } from './Routers/spoofyMutationRouter';
import { spoofySubscrptionRouter } from './Routers/spoofySubscriptionRouter';

export const appRouter = router({
  spoofyQueryRouter: spoofyQueryRouter,
  spoofyMutationRouter: spoofyMutationRouter,
  spoofySubscrptionRouter: spoofySubscrptionRouter,
  health: publicProcedure.query(() => {
    return 'ok';
  }),
});

export type AppRouter = typeof appRouter;
