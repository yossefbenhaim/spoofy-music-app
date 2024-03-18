import { router, publicProcedure } from '../trpc';
import { mainClient } from '../../apolloConfig/apolloConnection';
import { observable } from '@trpc/server/observable';
import { ADD_PLAYLIST_SUBSCRIPTION } from '../../server/querys/subscription/addPlaylistSubscription';
import { DELETE_PLAYLIST_SONG_SUBSCRIPTION } from '../../server/querys/subscription/deletePlaylistSongSubscription';
import { ADD_PLAYLIST_SONG_SUBSCRIPTION } from '../../server/querys/subscription/addPlaylistSongSubscription';
import { UPDATE_PLAYLIST_NAME_SUBSCRIPTION } from '../../server/querys/subscription/updatePlaylistNameSubscription';
import { Playlist, Playlistsong } from '@spoofy/spoofy-types';

const eventCache: Set<string> = new Set();

export const spoofySubscrptionRouter = router({
  onAddPlaylistSubscription: publicProcedure.subscription(({ ctx }) => {
    return observable<Playlist>((emit) => {
      const { req } = ctx;
      const onAddPlaylist = () => {
        const subscription = mainClient
          .subscribe({ query: ADD_PLAYLIST_SUBSCRIPTION })
          .subscribe({
            next(data) {
              emit.next(data.data.listen.relatedNode);
            },
          });
        return subscription.unsubscribe; // Return the unsubscribe function
      };
      req.on('onAddPlaylist', onAddPlaylist);
      return () => {
        req.off('onAddPlaylist', onAddPlaylist);
      };
    });
  }),

  onAddPlaylistSongsSubscription: publicProcedure.subscription(({ ctx }) => {
    return observable<Playlistsong>((emit) => {
      const { req } = ctx;
      const onAddPlaylist = () => {
        const subscription = mainClient
          .subscribe({ query: ADD_PLAYLIST_SONG_SUBSCRIPTION })
          .subscribe({
            next(data) {
              const songId = data.data.listen.relatedNodeId;
              if (!eventCache.has(songId)) {
                emit.next(data.data.listen.relatedNode);
                eventCache.add(songId);
              }
            },
          });
        return subscription.unsubscribe; // Return the unsubscribe function
      };
      req.on('onAddPlaylistSongsSubscription', onAddPlaylist);
      return () => {
        req.off('onAddPlaylistSongsSubscription', onAddPlaylist);
      };
    });
  }),

  onDeletePlaylistSongsSubscription: publicProcedure.subscription(({ ctx }) => {
    return observable<string>((emit) => {
      const { req } = ctx;
      const onAddPlaylist = () => {
        const subscription = mainClient
          .subscribe({ query: DELETE_PLAYLIST_SONG_SUBSCRIPTION })
          .subscribe({
            next(data) {
              emit.next(data.data.listen.relatedNodeId);
            },
          });
        return subscription.unsubscribe; // Return the unsubscribe function
      };
      req.on('onDeletePlaylistSongsSubscription', onAddPlaylist);
      return () => {
        req.off('onDeletePlaylistSongsSubscription', onAddPlaylist);
      };
    });
  }),

  onUpdatePlaylistNameSubscription: publicProcedure.subscription(({ ctx }) => {
    return observable<Pick<Playlist, 'id' | 'name'>>((emit) => {
      const { req } = ctx;
      const onAddPlaylist = () => {
        const subscription = mainClient
          .subscribe({ query: UPDATE_PLAYLIST_NAME_SUBSCRIPTION })
          .subscribe({
            next(data) {
              emit.next(data.data.listen.relatedNode);
            },
          });
        return subscription.unsubscribe; // Return the unsubscribe function
      };
      req.on('onUpdatePlaylistNameSubscription', onAddPlaylist);
      return () => {
        req.off('onUpdatePlaylistNameSubscription', onAddPlaylist);
      };
    });
  }),
});

export type AppRouter = typeof spoofySubscrptionRouter;
