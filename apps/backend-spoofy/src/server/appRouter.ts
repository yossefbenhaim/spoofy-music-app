import { spoofyQueryRouter } from './routers/spoofyQueryRouter';
import { publicProcedure, router } from './trpc';
import { spoofyMutationRouter } from './routers/spoofyMutationRouter';
import { spoofyAuthenticationRouter } from './routers/spoofyAuthenticationRouter';
import { spoofySubscriptionRouter } from './routers/spoofySubscriptionRouter';

export const appRouter = router({
  spoofyQueryRouter: spoofyQueryRouter,
  spoofyMutationRouter: spoofyMutationRouter,
  spoofySubscriptionRouter: spoofySubscriptionRouter,
  spoofyAuthenticationRouter: spoofyAuthenticationRouter,
  health: publicProcedure.query(() => {
    return 'ok';
  }),
});

export type AppRouter = typeof appRouter;
