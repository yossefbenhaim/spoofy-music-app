import { gql } from '@apollo/client';

const DELETE_USER_BY_ID = gql`
  mutation deleteUserById($id: UUID!) {
    deleteUserById(input: { id: $id }) {
      deletedUserId
    }
  }
`;

export default DELETE_USER_BY_ID;
