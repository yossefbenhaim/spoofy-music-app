import { gql } from '@apollo/client';

const ADD_FAVORITE = gql`
  mutation CreateFavorite($userId: UUID!, $songId: UUID!) {
    createFavorite(input: { favorite: { userId: $userId, songId: $songId } }) {
      clientMutationId
    }
  }
`;

export default ADD_FAVORITE;
