import { gql } from '@apollo/client';

export const UPDATE_PLAYLIST_NAME_SUBSCRIPTION = gql`
  subscription MySubscription {
    listen(topic: "update_playlist") {
      relatedNodeId
      relatedNode {
        ... on Playlist {
          __typename
          id
          name
        }
      }
    }
  }
`;
