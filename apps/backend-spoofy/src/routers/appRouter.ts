import { spoofyQueryRouter } from './spoofyQueryRouter';
import { publicProcedure, router } from '../tRPC/trpc';
import { spoofyMutationRouter } from './spoofyMutationRouter';
import { spoofyAuthenticationRouter } from './spoofyAuthenticationRouter';
import { spoofySubscriptionRouter } from './spoofySubscriptionRouter';

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
