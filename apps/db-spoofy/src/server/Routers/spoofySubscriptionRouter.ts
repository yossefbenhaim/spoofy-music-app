import { router, publicProcedure } from '../trpc';
import {
  CreateSongInput,
  Mutation,
  Subscription,
} from '../../types/spoofyTypes';
import { mainClient } from '../../apolloConfig/apolloConnection';
import { z } from 'zod';

import ADD_SONG from '../querys/mutation/addSong';
// import ADD_PLAYLIST_SONG_SUBSCRIPTION from 'server/querys/subscription/addPlaylistSongSubscription';
import { gql, useSubscription } from '@apollo/client';
// import ADD_PLAYLIST_SUBSCRIPTION from 'server/querys/subscription/addPlaylistSubscription';

const ADD_PLAYLIST_SUBSCRIPTION = gql`
  subscription MySubscription {
    listen(topic: "new_playlist") {
      relatedNodeId
      relatedNode {
        ... on Playlist {
          __typename
          id
          name
          creatorId
          createdPlaylist
        }
      }
    }
  }
`;

export const spoofySubscrptionRouter = router({
  addPlaylistSongSubacription: publicProcedure.subscription(() => {
    useSubscription(ADD_PLAYLIST_SUBSCRIPTION, {
      onData: (data) => {
        const playlistsInsertData = data.data.data.listen.relatedNode;
        console.log(playlistsInsertData);
      },
    });
  }),
});

export type AppRouter = typeof spoofySubscrptionRouter;
