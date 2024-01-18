import { trpc } from 'trpc/trpcProvider';
import { Playlist } from '@models/interface/playlist';
import { useDispatch } from 'react-redux';
import { Playlistsong } from '@spoofy/spoofy-types';
import { useAppSelector } from 'redux/store';
import { deleteSong, resetCurrentSongId } from 'redux/slice/currentPlaylist';
import { addPlaylist, deleteSongFromPlaylist, updatePlaylistName, updatePlaylistSongs } from 'redux/slice/playlists';
import { useEffect, useState } from 'react';

const UseSubscription = () => {
	const dispatch = useDispatch();
	const currentSongId = useAppSelector((state) => state.currentPlaylist.songId);

	const [newPlaylist, setNewPlaylist] = useState<Playlist>()
	const [newPlayliatSong, setNewPlaylistSong] = useState<Pick<Playlistsong, 'playlistId' | 'songId'>>()
	const [deletePlaylist, setDeletePlaylist] = useState<Pick<Playlistsong, 'playlistId' | 'songId'>>()
	const [playlistName, setPlaylistName] = useState<Pick<Playlist, 'id' | 'name'>>()
	trpc.spoofySubscrptionRouter.onAddPlaylistSubscription.useSubscription(undefined, {
		onData: (data: Playlist) => {
			if (data) {
				setNewPlaylist(data)
			}
			console.log('Subscription Data:', data);
		},
		onError: (err) => {
			console.error('Subscription Error:', err);
		},
	});

	useEffect(() => {
		if (newPlaylist)
			dispatch(
				addPlaylist({
					id: newPlaylist.id,
					name: newPlaylist.name,
					creatorId: newPlaylist.creatorId,
				})
			);
	}, [dispatch, newPlaylist])

	trpc.spoofySubscrptionRouter.onAddPlaylistSongsSubscription.useSubscription(undefined, {
		onData: (data: Playlistsong) => {
			if (data) {
				const playlistId = data.playlistId;
				const songId = data.songId;
				setNewPlaylistSong({
					playlistId: playlistId,
					songId: songId
				})
			}

			console.log('Subscription add Songs:', data);
		},
		onError: (err) => {
			console.error('Subscription add Songs:', err);
		},
	});
	useEffect(() => {
		if (newPlayliatSong)
			dispatch(
				updatePlaylistSongs({
					playlistId: newPlayliatSong.playlistId,
					songId: newPlayliatSong.songId,
				})
			);
	}, [dispatch, newPlayliatSong])

	trpc.spoofySubscrptionRouter.onDeletePlaylistSongsSubscription.useSubscription(undefined, {
		onData: (data: string) => {
			if (data) {
				const decodedText = window.atob(
					data
				);
				const parsedData = JSON.parse(decodedText);
				const playlistId = parsedData[1];
				const songId = parsedData[2];
				setDeletePlaylist({
					playlistId,
					songId
				})
			}
			console.log('Subscription delete Songs:', data);
		},
		onError: (err) => {
			console.error('Subscription delete Songs:', err);
		},
	});
	useEffect(() => {
		if (deletePlaylist)
			dispatch(
				deleteSongFromPlaylist({
					playlistId: deletePlaylist.playlistId,
					songId: deletePlaylist.songId,
				})
			);
		dispatch(deleteSong(deletePlaylist?.songId));
		if (currentSongId === deletePlaylist?.songId) {
			dispatch(resetCurrentSongId());
		}
	}, [dispatch, deletePlaylist])

	trpc.spoofySubscrptionRouter.onUpdatePlaylistNameSubscription.useSubscription(undefined, {
		onData: (data: { id?: string; name?: string; }) => {
			if (data) {
				const playlistId = data.id;
				const newName = data.name;
				setPlaylistName({
					id: playlistId,
					name: newName as string
				})
			}
			console.log('Subscription update name playlist:', data);
		},
		onError: (err) => {
			console.error('Subscription update name playlist:', err);
		},
	});

	useEffect(() => {
		if (playlistName)
			dispatch(
				updatePlaylistName({
					id: playlistName.id,
					name: playlistName.name,
				})
			);
	}, [dispatch, playlistName])
	return (
		<></>
	);
};

export default UseSubscription;
