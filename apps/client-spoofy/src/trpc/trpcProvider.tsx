import { AppRouter } from '@spoofy/backend-spoofy';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import {
	createTRPCReact, createWSClient, wsLink
} from '@trpc/react-query'

export const trpc = createTRPCReact<AppRouter>();
//todo: replace to env url
const NX_TRPC_DB = 'ws://localhost:3000'

const wsClient = createWSClient({
	url: NX_TRPC_DB,
});

const createTRPClient = () => {
	return trpc.createClient({
		links: [
			wsLink<AppRouter>({ client: wsClient })
		],
	})
};


export const TrpcProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [queryClient] = useState(
		() => new QueryClient({
			defaultOptions: { queries: { refetchOnWindowFocus: false } }
		})
	);
	const [trpcClient] = useState(createTRPClient);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</trpc.Provider>
	)
}