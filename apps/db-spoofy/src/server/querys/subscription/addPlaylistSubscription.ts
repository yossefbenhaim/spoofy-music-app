import { gql } from '@apollo/client';

export const ADD_PLAYLIST_SUBSCRIPTION = gql`
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
