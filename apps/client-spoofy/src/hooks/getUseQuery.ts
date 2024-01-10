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

const getUseQuery = () => {
  const dispatch = useDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.user);
  console.log('test runder');

  const favoritesData = trpc.spoofyQueryRouter.getFavoritesByUser.useQuery({
    data: { userId: currentUser?.id },
  });
  useEffect(() => {
    if (favoritesData.isSuccess) {
      const data = favoritesData.data;
      const favorites: Favorite[] = data?.map((favorite) => ({
        songId: favorite.songId,
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
        songs: playlist.playlistsongsByPlaylistId.nodes.map(
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
};

export default getUseQuery;
