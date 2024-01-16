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
import { gql } from '@apollo/client';
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
    // Return an observable that emits new playlist data when the Apollo Client subscription receives updates.
    const t = mainClient.subscribe({ query: ADD_PLAYLIST_SUBSCRIPTION });
    console.log(
      t,
      '----------------------------------------yiug--------------------------'
    );

    return t;
  }),
});

export type AppRouter = typeof spoofySubscrptionRouter;
