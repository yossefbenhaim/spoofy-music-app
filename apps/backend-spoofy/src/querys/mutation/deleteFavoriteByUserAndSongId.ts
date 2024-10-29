import { gql } from '@apollo/client';

const DELETE_FAVORITS_BY_USER_ID_AND_SONG_ID = gql`
  mutation deleteFavorite($userId: UUID!, $songId: UUID!) {
    deleteFavoriteByUserIdAndSongId(
      input: { userId: $userId, songId: $songId }
    ) {
      clientMutationId
      deletedFavoriteId
    }
  }
`;

export default DELETE_FAVORITS_BY_USER_ID_AND_SONG_ID;
