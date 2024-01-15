import { router, publicProcedure } from '../trpc';
import {
  CreateFavoriteInput,
  CreatePlaylistInput,
  CreatePlaylistsongInput,
  CreateSongInput,
  DeleteFavoriteByUserIdAndSongIdInput,
  DeletePlaylistsongByPlaylistIdAndSongIdInput,
  DeleteUserByIdInput,
  Mutation,
  UpdatePlaylistByIdInput,
} from '../../types/spoofyTypes';
import { mainClient } from '../../apolloConfig/apolloConnection';
import { z } from 'zod';

import ADD_SONG from '../querys/mutation/addSong';
import ADD_FAVORITE from '../querys/mutation/addFavorite';
import ADD_PLAYLIST from '../querys/mutation/addPlaylist';
import ADD_PLAYLIST_SONG from '../querys/mutation/addPlaylistSong';
import DELETE_FAVORITS_BY_USER_ID_AND_SONG_ID from '../querys/mutation/deleteFavoriteByUserAndSongId';
import DELETE_PLAYLIST_SONG_BY_PLAYLIST_AND_SONG_ID from '../querys/mutation/deletePlaylistSongByPlaylistIdAndSongId';
import DELETE_USER_BY_ID from '../querys/mutation/deleteUserById';
import UPDATE_PLAYLIST_NAME_BY_ID from '../querys/mutation/updatePlaylistNameById';

export const spoofyMutationRouter = router({
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

  addFavorite: publicProcedure
    .input(z.object({ data: z.custom<CreateFavoriteInput>() }))
    .mutation(async ({ input }) => {
      const { data } = input;
      await mainClient.mutate<Required<Pick<Mutation, 'createFavorite'>>>({
        mutation: ADD_FAVORITE,
        variables: {
          userId: data.favorite.userId,
          songId: data.favorite.songId,
        },
      });
      //   return newFavorite.data?.createFavorite.favorite;
    }),

  addPlaylist: publicProcedure
    .input(z.object({ data: z.custom<CreatePlaylistInput>() }))
    .mutation(async ({ input }) => {
      const { data } = input;
      const newPlaylist = await mainClient.mutate<
        Required<Pick<Mutation, 'createPlaylist'>>
      >({
        mutation: ADD_PLAYLIST,
        variables: {
          name: data.playlist.name,
          creatorId: data.playlist.creatorId,
        },
      });
      return newPlaylist.data?.createPlaylist.playlist;
    }),
  addPlaylistSong: publicProcedure
    .input(z.object({ data: z.custom<CreatePlaylistsongInput>() }))
    .mutation(async ({ input }) => {
      const { data } = input;
      const newPlaylistSong = await mainClient.mutate<
        Required<Pick<Mutation, 'createPlaylistsong'>>
      >({
        mutation: ADD_PLAYLIST_SONG,
        variables: {
          playlistId: data.playlistsong.playlistId,
          songId: data.playlistsong.songId,
        },
      });
      return newPlaylistSong.data?.createPlaylistsong.playlistsong;
    }),

  deleteFavoriteByUserIdAndSongId: publicProcedure
    .input(z.object({ data: z.custom<DeleteFavoriteByUserIdAndSongIdInput>() }))
    .mutation(async ({ input }) => {
      const { data } = input;
      const deleteFavoriteByUserIdAndSongId = await mainClient.mutate<
        Required<Pick<Mutation, 'deleteFavoriteByUserIdAndSongId'>>
      >({
        mutation: DELETE_FAVORITS_BY_USER_ID_AND_SONG_ID,
        variables: {
          userId: data.userId,
          songId: data.songId,
        },
      });
      return deleteFavoriteByUserIdAndSongId.data
        ?.deleteFavoriteByUserIdAndSongId.favorite;
    }),
  deletePlaylistSong: publicProcedure
    .input(
      z.object({
        data: z.custom<DeletePlaylistsongByPlaylistIdAndSongIdInput>(),
      })
    )
    .mutation(async ({ input }) => {
      const { data } = input;
      const deletePlaylistsong = await mainClient.mutate<
        Required<Pick<Mutation, 'deletePlaylistsong'>>
      >({
        mutation: DELETE_PLAYLIST_SONG_BY_PLAYLIST_AND_SONG_ID,
        variables: {
          playlistId: data.playlistId,
          songId: data.songId,
        },
      });
      return deletePlaylistsong.data?.deletePlaylistsong.deletedPlaylistsongId;
    }),
  deleteUserById: publicProcedure
    .input(
      z.object({
        data: z.custom<DeleteUserByIdInput>(),
      })
    )
    .mutation(async ({ input }) => {
      const { data } = input;
      const deleteUserById = await mainClient.mutate<
        Required<Pick<Mutation, 'deleteUserById'>>
      >({
        mutation: DELETE_USER_BY_ID,
        variables: {
          id: data.id,
        },
      });
      return deleteUserById.data?.deleteUserById.user;
    }),
  updatePlaylistNameById: publicProcedure
    .input(
      z.object({
        data: z.custom<Pick<UpdatePlaylistByIdInput, 'playlistPatch'>>(),
      })
    )
    .mutation(async ({ input }) => {
      const { data } = input;
      console.log(data.playlistPatch);

      const updatePlaylistNameById = await mainClient.mutate<
        Required<Pick<Mutation, 'updatePlaylistById'>>
      >({
        mutation: UPDATE_PLAYLIST_NAME_BY_ID,
        variables: {
          id: data.playlistPatch.id,
          name: data.playlistPatch.name,
        },
      });
      return updatePlaylistNameById.data?.updatePlaylistById.playlist;
    }),
});

export type AppRouter = typeof spoofyMutationRouter;
