import { createHTTPServer } from '@trpc/server/adapters/standalone';

export const loginMiddleware: NonNullable<
  Parameters<typeof createHTTPServer>['0']['middleware']
> = async (req, res, next) => {
  console.log('be got request in path: ', req.url);
  next();
};
