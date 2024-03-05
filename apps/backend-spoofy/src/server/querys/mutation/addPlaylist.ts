import { gql } from '@apollo/client';

const ADD_PLAYLIST = gql`
  mutation addPlaylist($name: String!, $creatorId: UUID!) {
    createPlaylist(
      input: { playlist: { name: $name, creatorId: $creatorId } }
    ) {
      clientMutationId
      playlist {
        id
        name
        creatorId
      }
    }
  }
`;

export default ADD_PLAYLIST;
