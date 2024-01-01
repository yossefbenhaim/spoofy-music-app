import { gql } from '@apollo/client';

const GET_USERS = gql`
  query allUsers {
    allUsers {
      nodes {
        id
        firstName
        lastName
        coordinates
        address
      }
    }
  }
`;

export default GET_USERS;
