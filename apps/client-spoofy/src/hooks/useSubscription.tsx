import { trpc } from 'trpc/trpcProvider';
import { Playlist } from '@models/interface/playlist';
import { useDispatch } from 'react-redux';
import { Playlistsong } from '@spoofy/spoofy-types';
import { useAppSelector } from 'redux/store';
import { deleteSong, resetCurrentSongId } from 'redux/slice/currentPlaylist';
import { addPlaylist, deleteSongFromPlaylist, updatePlaylistName, updatePlaylistSongs } from 'redux/slice/playlists';

const UseSubscription = () => {
	const dispatch = useDispatch();
	const currentSongId = useAppSelector((state) => state.currentPlaylist.songId);

	trpc.spoofySubscrptionRouter.onAddPlaylistSubscription.useSubscription(undefined, {
		onData: (data: Playlist) => {
			const playlistsInsertData = data;
			dispatch(
				addPlaylist({
					id: playlistsInsertData.id,
					name: playlistsInsertData.name,
					creatorId: playlistsInsertData.creatorId,
				})
			);
			console.log('Subscription Data:', data);
		},
		onError: (err) => {
			console.error('Subscription Error:', err);
		},
	});


	trpc.spoofySubscrptionRouter.onAddPlaylistSongsSubscription.useSubscription(undefined, {
		onData: (data: Playlistsong) => {
			const playlistId = data.playlistId;
			const songId = data.songId;

			dispatch(
				updatePlaylistSongs({
					playlistId: playlistId,
					songId: songId,
				})
			);
			console.log('Subscription add Songs:', data);
		},
		onError: (err) => {
			console.error('Subscription add Songs:', err);
		},
	});


	trpc.spoofySubscrptionRouter.onDeletePlaylistSongsSubscription.useSubscription(undefined, {
		onData: (data: string) => {
			const decodedText = window.atob(
				data
			);
			const parsedData = JSON.parse(decodedText);
			const playlistId = parsedData[1];
			const songId = parsedData[2];
			dispatch(
				deleteSongFromPlaylist({
					playlistId: playlistId,
					songId: songId,
				})
			);
			dispatch(deleteSong(songId));
			if (currentSongId === songId) {
				dispatch(resetCurrentSongId());
			}
			console.log('Subscription delete Songs:', data);
		},
		onError: (err) => {
			console.error('Subscription delete Songs:', err);
		},
	});


	trpc.spoofySubscrptionRouter.onUpdatePlaylistNameSubscription.useSubscription(undefined, {
		onData: (data: { id?: string; name?: string; }) => {
			const playlistId = data.id;
			const newName = data.name;
			dispatch(
				updatePlaylistName({
					id: playlistId,
					name: newName as string,
				})
			);
			console.log('Subscription update name playlist:', data);
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
