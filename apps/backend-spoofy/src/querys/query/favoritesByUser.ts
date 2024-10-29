import { gql } from '@apollo/client';

const FAVORITES_BY_USER = gql`
  query allFavorites($userId: UUID!) {
    allFavorites(filter: { userId: { equalTo: $userId } }) {
      nodes {
        songId
      }
    }
  }
`;

export default FAVORITES_BY_USER;
