import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { trpcClient } from '../tRPC/trpcAuthentication';

export const validateTokenMiddleware: NonNullable<
  Parameters<typeof createHTTPServer>['0']['middleware']
> = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const t = trpcClient.authentication.validateToken.mutate({
    token: authHeader!,
  });

  console.log('validation token =====>: ', t);
  next();
};
