import { gql } from '@apollo/client';

export const GET_USER_BY_EMAIL = gql`
  query allUsers($email: String!) {
    allUsers(filter: { email: { equalTo: $email } }) {
      nodes {
        userName
        email
        coordinates
        password
      }
    }
  }
`;
