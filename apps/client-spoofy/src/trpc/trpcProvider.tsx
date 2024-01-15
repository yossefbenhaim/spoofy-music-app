import { AppRouter } from '@spoofy/backend-spoofy';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
	createTRPCProxyClient, createTRPCReact, createWSClient, httpLink, wsLink
} from '@trpc/react-query'
import { ReactNode, useState } from 'react'

export const trpc = createTRPCReact<AppRouter>();
const httpClient = httpLink({
	url: '/api/db',
	fetch: (url, options) =>
		fetch(url, {
			...options,
			credentials: 'include'
		})
})
const createTRPClient = () => {
	return trpc.createClient({
		links: [
			httpClient
		],
	})
};

export const trpcClient = createTRPCProxyClient<AppRouter>({
	links: [
		httpClient
	],
});

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