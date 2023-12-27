let superjson;
import('superjson').then((module) => {
  superjson = module.default || module;
});
import { initTRPC } from '@trpc/server';
import { Context } from '../context';

const t = initTRPC.context<Context>().create({
  isServer: true,
});

export const router = t.router;
export const publicProcedure = t.procedure;
