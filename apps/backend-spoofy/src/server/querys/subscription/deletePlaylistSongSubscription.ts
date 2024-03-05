import { gql } from '@apollo/client';

export const DELETE_PLAYLIST_SONG_SUBSCRIPTION = gql`
  subscription MySubscription {
    listen(topic: "delete_playlistSong") {
      relatedNodeId
      relatedNode {
        ... on Playlistsong {
          __typename
          playlistId
          songId
        }
      }
    }
  }
`;
