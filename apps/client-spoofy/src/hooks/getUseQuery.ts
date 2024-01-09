import { useAppSelector } from 'redux/store';
import { setPlaylists } from 'redux/slice/playlists';
import { setFavorites } from 'redux/slice/favorites';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { setSongs } from 'redux/slice/songs';
import { Favorite } from 'models/interface/favorite';
import { Playlist } from 'models/interface/playlist';
import { Song } from 'models/interface/song';

import GET_SONGS from 'queries/query/songs';
import GET_PLAYLIST from 'queries/query/playlists';
import FAVORITES_BY_USER from 'queries/query/favoritesByUser';
import { trpc } from 'trpc/trpcProvider';

const getUseQuery = () => {
  const dispatch = useDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.user);

  //   useQuery(FAVORITES_BY_USER, {
  //     fetchPolicy: 'network-only',
  //     variables: {
  //       userId: currentUser?.id,
  //     },
  //     onCompleted: (data) => {
  //       const favoritesData: Favorite[] = data.allFavorites.nodes;
  //       dispatch(setFavorites(favoritesData));
  //     },
  //   });

  const favoritesData = trpc.spoofyQueryRouter.getFavoritesByUser.useQuery({
    data: { userId: currentUser?.id, songId: '' },
  });
  if (favoritesData.isSuccess) {
    const data = favoritesData.data?.nodes;
    const favorites: Favorite[] = data?.map((favorite) => ({
      songId: favorite.songId,
    }));
    console.log('test favorites');
    dispatch(setFavorites(favorites!));
  } else {
    console.log('no passs', favoritesData.data?.nodes, currentUser?.id);
  }

  const parse_playlist: any = (playlistDB: any) => ({
    id: playlistDB.id,
    name: playlistDB.name,
    creatorId: playlistDB.creatorId,
    songs: playlistDB.playlistsongsByPlaylistId.nodes.map(
      (song: any) => song.songId
    ),
  });

  useQuery(GET_PLAYLIST, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      const playlistsSong = (data.allPlaylists.nodes as any[]).map<Playlist>(
        parse_playlist
      );
      dispatch(setPlaylists(playlistsSong));
    },
  });

  //   const playlistsData = trpc.spoofyQueryRouter.getPlaylists.useQuery();
  //   if (playlistsData.isSuccess) {
  //     const data = playlistsData.data.nodes;
  //     const playlists: Playlist[] = data.map((playlist) => ({
  //       id: playlist.id,
  //       name: playlist.name,
  //       creatorId: playlist.creatorId,
  //       songs: playlist.playlistsongsByPlaylistId.nodes.map(
  //         (song) => song.songId
  //       ),
  //     }));
  //     dispatch(setPlaylists(playlists));
  //   }

  const parse_song = (songDB: any) => ({
    id: songDB.id,
    name: songDB.name,
    duration: songDB.duration,
    artist: songDB.artistByArtistId.name,
  });

  useQuery(GET_SONGS, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      const songsData = (data.allSongs.nodes as any[]).map<Song>(parse_song);
      dispatch(setSongs(songsData));
    },
  });

  //   const songsData = trpc.spoofyQueryRouter.getSongs.useQuery();
  //   if (songsData.isSuccess) {
  //     const data = songsData.data.nodes;
  //     const songs: Song[] = data.map((song) => ({
  //       id: song.id!,
  //       name: song.name,
  //       duration: song.duration,
  //       artist: song.artistByArtistId?.name!,
  //     }));
  //     dispatch(setSongs(songs));
  //   }
};
export default getUseQuery;
