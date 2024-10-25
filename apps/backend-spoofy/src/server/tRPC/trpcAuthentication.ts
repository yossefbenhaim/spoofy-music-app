import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '@spoofy/spoofy-authentication'; // Import AppRouter type from the remote server

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8000/api/',
    }),
  ],
});
