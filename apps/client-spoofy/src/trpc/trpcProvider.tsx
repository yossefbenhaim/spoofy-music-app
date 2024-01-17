import { AppRouter } from '@spoofy/backend-spoofy';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
	createTRPCProxyClient, createTRPCReact, createWSClient, httpLink, wsLink
} from '@trpc/react-query'
import { ReactNode, useEffect, useState } from 'react'

export const trpc = createTRPCReact<AppRouter>();

const httpClient = httpLink({
	url: '/api/db',
	fetch: (url, options) =>
		fetch(url, {
			...options,
			credentials: 'include'
		})
})
const wsClient = createWSClient({
	url: `wss://localhost:3000`,
});

const createTRPClient = () => {
	return trpc.createClient({
		links: [
			httpClient,
			wsLink({
				client: wsClient,
			}),
		],
	})
};

// export const trpcClient = createTRPCProxyClient<AppRouter>({
// 	links: [
// 		httpClient,
// 		wsLink({
// 			client: wsClient,
// 		}),
// 	],
// });

export const TrpcProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [queryClient] = useState(
		() => new QueryClient({
			defaultOptions: { queries: { refetchOnWindowFocus: false } }
		})
	);
	const [trpcClient] = useState(createTRPClient);

	const [message, setMessage] = useState('');

	useEffect(() => {
		console.log('Connecting to WebSocket...');
		const ws = new WebSocket('ws://localhost:3000');

		ws.addEventListener('open', (dataa) => {
			ws.send('test')
			console.log('WebSocket connection established', dataa);
		});

		ws.addEventListener('message', (event) => {
			console.log(`Received message: ${event.data}`);
			setMessage(`Received message: ${event.data}`);
		});

		ws.addEventListener('close', () => {
			console.log('WebSocket connection closed');
		});

		ws.addEventListener('error', (error) => {
			console.error('WebSocket error:', error);
		});

		return () => {
			// ws.close();
		};
	}, []);


	console.log('--------------message--------------', message);


	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</trpc.Provider>
	)
}