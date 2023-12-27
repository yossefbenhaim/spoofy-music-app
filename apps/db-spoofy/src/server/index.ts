import { publicProcedure, router } from './trpc';

export const appRouter = router({
  health: publicProcedure.query(() => {
    return 'ok';
  }),
});

export type AppRouter = typeof appRouter;
