import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { trpc } from 'trpc/trpcProvider';

const YourComponent = () => {
	const { enqueueSnackbar } = useSnackbar();

	const t = trpc.spoofyMutationRouter.onAddPlaylistSubscription.useSubscription(undefined, {
		onData: (data) => {
			console.log('Subscription Data:', data);
			enqueueSnackbar(`Received message: ${data}`, { variant: 'success' });
		},
		onError: (err) => {
			console.error('Subscription Error:', err);
			enqueueSnackbar('Subscription Error', { variant: 'error' });
		},
	});

	useEffect(() => {

		// Cleanup function when component unmounts
		return () => {
			// Perform any cleanup if needed
		};
	}, [enqueueSnackbar]);

	return (
		<div>teststst</div>
	);
};

export default YourComponent;
