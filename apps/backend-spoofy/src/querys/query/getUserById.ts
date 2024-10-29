import { gql } from '@apollo/client';

const GET_USER_BY_ID = gql`
  query allUsers($id: UUID!) {
    allUsers(filter: { id: { equalTo: $id } }) {
      nodes {
        id
        userName
        password
        email
        coordinates
      }
    }
  }
`;

export default GET_USER_BY_ID;
