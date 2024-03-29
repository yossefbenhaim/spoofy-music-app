import { gql } from '@apollo/client';

const UPDATE_PLAYLIST_NAME_BY_ID = gql`
  mutation updatePlayliatName($name: String!, $id: UUID!) {
    updatePlaylistById(input: { playlistPatch: { name: $name }, id: $id }) {
      clientMutationId
    }
  }
`;

export default UPDATE_PLAYLIST_NAME_BY_ID;
