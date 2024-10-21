import { inferAsyncReturnType } from '@trpc/server';
import { Request } from 'express';
import redis from '../redis/redisClient';

export const createContext = async ({ req }: { req: Request }) => {
  const token = req.headers.authorization?.split('')[1];
  let user = null;

  if (token) {
    const redisUser = await redis.get(`session${token}`);
    if (redisUser) {
      user = JSON.parse(redisUser);
    }
  }
  return { user, req, redis };
};

export type Context = inferAsyncReturnType<typeof createContext>;
