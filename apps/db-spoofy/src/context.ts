import { inferAsyncReturnType } from '@trpc/server';

export const createContext = ({ req }: any) => {
  return { req };
};

export type Context = inferAsyncReturnType<typeof createContext>;
