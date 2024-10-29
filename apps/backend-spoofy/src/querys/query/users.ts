import { gql } from '@apollo/client';

const GET_USERS = gql`
  query allUsers {
    allUsers {
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

export default GET_USERS;
