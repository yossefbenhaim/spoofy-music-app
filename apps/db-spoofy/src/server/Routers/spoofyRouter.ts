import { router, publicProcedure } from '../trpc';
import {
  ArtistsConnection,
  FavoritesConnection,
  PlaylistsConnection,
  Query,
  SongsConnection,
  User,
  UsersConnection,
} from '../../types/spoofyTypes';
import { mainClient } from '../../apolloConfig/apolloConnection';
import GET_USERS from '../query/users';
import { z } from 'zod';
import GET_ARTIST from '../query/artists';
import GET_SONGS from '../query/songs';
import GET_PLAYLIST from '../query/playlists';
import FAVORITES_BY_USER from '../query/favoritesByUser';
export const spoofyRouter = router({
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
});

export type AppRouter = typeof spoofyRouter;
