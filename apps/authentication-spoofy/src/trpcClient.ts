import { createTRPCProxyClient, httpLink } from '@trpc/client';
import { AppRouter } from '@spoofy/backend-spoofy'; // Adjust the import based on your file structure
import dotenv from 'dotenv';
dotenv.config();
const NX_TRPC_DB = process.env['NX_TRPC_DB'] as string;

const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      url: NX_TRPC_DB,
    }),
  ],
});

export default trpcClient;
