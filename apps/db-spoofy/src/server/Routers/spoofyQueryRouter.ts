import { router, publicProcedure } from '../trpc';
import {
  ArtistsConnection,
  CreateSongInput,
  CreateSongPayload,
  FavoritesConnection,
  Mutation,
  PlaylistsConnection,
  Query,
  SongsConnection,
  User,
  UsersConnection,
} from '../../types/spoofyTypes';
import { mainClient } from '../../apolloConfig/apolloConnection';
import GET_USERS from '../querys/query/users';
import { z } from 'zod';
import GET_ARTIST from '../querys/query/artists';
import GET_SONGS from '../querys/query/songs';
import GET_PLAYLIST from '../querys/query/playlists';
import FAVORITES_BY_USER from '../querys/query/favoritesByUser';
import ADD_SONG from '../querys/mutation/addSong';

const sddSongSchema = z.object({
  name: z.string(),
  artist_id: z.string(),
  duration: z.number(),
});
export const spoofyQueryRouter = router({
  getUsers: publicProcedure.query<UsersConnection>(async () => {
    const allUsers = await mainClient.query<Required<Pick<Query, 'allUsers'>>>({
      query: GET_USERS,
      fetchPolicy: 'no-cache',
    });

    const users = allUsers.data.allUsers;
    return users;
  }),

  getArtists: publicProcedure.query<ArtistsConnection>(async () => {
    const allArtists = await mainClient.query<
      Required<Pick<Query, 'allArtists'>>
    >({
      query: GET_ARTIST,
      fetchPolicy: 'no-cache',
    });

    const artists = allArtists.data.allArtists;
    return artists;
  }),

  getSongs: publicProcedure.query<SongsConnection>(async () => {
    const allSongs = await mainClient.query<Required<Pick<Query, 'allSongs'>>>({
      query: GET_SONGS,
      fetchPolicy: 'no-cache',
    });

    const songs = allSongs.data.allSongs;
    return songs;
  }),

  getPlaylists: publicProcedure.query<PlaylistsConnection>(async () => {
    const allPlaylists = await mainClient.query<
      Required<Pick<Query, 'allPlaylists'>>
    >({
      query: GET_PLAYLIST,
      fetchPolicy: 'no-cache',
    });

    const playlists = allPlaylists.data.allPlaylists;
    return playlists;
  }),

  getFavoritesByUser: publicProcedure
    .input(z.string())
    .query<FavoritesConnection>(async ({ input }) => {
      const favoritesByUserId = await mainClient.query<
        Required<Pick<Query, 'allFavorites'>>
      >({
        query: FAVORITES_BY_USER,
        variables: {
          id: input,
        },
        fetchPolicy: 'no-cache',
      });

      const favorites = favoritesByUserId.data.allFavorites;
      return favorites;
    }),

  //   mutaiton -------------------
  getUserById: publicProcedure
    .input(z.string())
    .query<User>(async ({ input }) => {
      const getUser = await mainClient.query<Required<Pick<Query, 'userById'>>>(
        {
          query: GET_USERS,
          variables: {
            id: input,
          },
        }
      );
      return getUser.data.userById;
    }),

  addSong: publicProcedure
    .input(z.object({ data: z.custom<CreateSongInput>() }))
    .mutation(async ({ input }) => {
      const { data } = input;
      const newSong = await mainClient.mutate<
        Required<Pick<Mutation, 'createSong'>>
      >({
        mutation: ADD_SONG,
        variables: {
          name: data.song.name,
          artistId: data.song.artistId,
          duration: data.song.duration,
        },
      });
      return newSong.data?.createSong.song;
    }),
});

export type AppRouter = typeof spoofyQueryRouter;
