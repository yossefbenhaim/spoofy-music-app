import { trpc } from 'trpc/trpcProvider';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'redux/store';
import { deleteSong, resetCurrentSongId } from 'redux/slice/currentPlaylist';
import { addPlaylist, deleteSongFromPlaylist, updatePlaylistName, updatePlaylistSongs } from 'redux/slice/playlists';

const UseSubscription = () => {
	const dispatch = useDispatch();
	const currentSongId = useAppSelector((state) => state.currentPlaylist.songId);

	trpc.spoofySubscrptionRouter.onAddPlaylistSubscription.useSubscription(undefined, {
		onData: (data) => {
			if (data) {
				dispatch(
					addPlaylist({
						id: data.id,
						name: data.name,
						creatorId: data.creatorId,
					})
				);
			}
		},
		onError: (err) => {
			console.error('Subscription Error:', err);
		},
	});

	trpc.spoofySubscrptionRouter.onAddPlaylistSongsSubscription.useSubscription(undefined, {
		onData: (data) => {
			if (data) {
				const playlistId = data.playlistId;
				const songId = data.songId;
				dispatch(
					updatePlaylistSongs({
						playlistId,
						songId,
					})
				);
			}
		},
		onError: (err) => {
			console.error('Subscription add Songs:', err);
		},
	});


	trpc.spoofySubscrptionRouter.onDeletePlaylistSongsSubscription.useSubscription(undefined, {
		onData: (data: string) => {
			if (data) {
				const decodedText = window.atob(
					data
				);
				const parsedData = JSON.parse(decodedText);
				const playlistId = parsedData[1];
				const songId = parsedData[2];
				dispatch(
					deleteSongFromPlaylist({
						playlistId,
						songId,
					})
				);
				dispatch(deleteSong(songId));
				if (currentSongId === songId) {
					dispatch(resetCurrentSongId());
				}
			}
		},
		onError: (err) => {
			console.error('Subscription delete Songs:', err);
		},
	});

	trpc.spoofySubscrptionRouter.onUpdatePlaylistNameSubscription.useSubscription(undefined, {
		onData: (data: { id?: string; name?: string; }) => {
			if (data) {
				const playlistId = data.id;
				const newName = data.name;
				dispatch(
					updatePlaylistName({
						id: playlistId,
						name: newName ?? '',
					})
				);
			}
		},
		onError: (err) => {
			console.error('Subscription update name playlist:', err);
		},
	});

	return (
		<></>
	);
};

export default UseSubscription;
