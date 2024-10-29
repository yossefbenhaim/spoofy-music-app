import { useAppSelector } from 'redux/store';
import { setPlaylists } from 'redux/slice/playlists';
import { setFavorites } from 'redux/slice/favorites';
import { useDispatch } from 'react-redux';
import { setSongs } from 'redux/slice/songs';
import { Favorite } from 'models/interface/favorite';
import { Playlist } from 'models/interface/playlist';
import { Song } from 'models/interface/song';

import { trpc } from 'trpc/trpcProvider';
import { useEffect } from 'react';
import { Artist } from '@models/interface/artist';
import { setArtists } from 'redux/slice/artist';
import { User } from '@models/interface/user';
import { setUsers } from 'redux/slice/users';

const UseQuery = () => {
	const dispatch = useDispatch();
	const currentUser = useAppSelector((state) => state.currentUser.user);
	const usersData = trpc.spoofyQueryRouter.getUsers.useQuery();
	const favoritesData = trpc.spoofyQueryRouter.getFavoritesByUser.useQuery({
		data: { userId: currentUser?.id },
	});

	useEffect(() => {
		if (favoritesData.isSuccess) {
			const data = favoritesData.data;
			const favorites: Favorite[] = data?.map((favorite) => ({
				songId: favorite?.songId,
			}));

			dispatch(setFavorites(favorites as Favorite[]));
		}
	}, [favoritesData]);

	const playlistsData = trpc.spoofyQueryRouter.getPlaylists.useQuery();
	useEffect(() => {
		if (playlistsData.isSuccess) {
			const data = playlistsData.data.nodes;
			const playlists: Playlist[] = data.map((playlist) => ({
				id: playlist.id,
				name: playlist.name,
				creatorId: playlist.creatorId,
				songs: playlist.playlistSongsByPlaylistId.nodes.map(
					(song) => song.songId
				),
			}));
			dispatch(setPlaylists(playlists));
		}
	}, [playlistsData]);

	const songsData = trpc.spoofyQueryRouter.getSongs.useQuery();
	useEffect(() => {
		if (songsData.isSuccess) {
			const songs = songsData.data.nodes;
			dispatch(setSongs(songs as Song[]));
		}
	}, [songsData]);

	const allArtists = trpc.spoofyQueryRouter.getArtists.useQuery();
	useEffect(() => {
		if (allArtists.isSuccess) {
			const artists = allArtists.data?.nodes;
			dispatch(setArtists(artists as Artist[]));
		}
	}, [allArtists]);
	useEffect(() => {
		if (usersData.isSuccess) {
			const users: User[] = usersData.data.nodes as User[];
			dispatch(setUsers(users));
		}
	}, [usersData]);
	return (
		<></>
	)
};

export default UseQuery;
