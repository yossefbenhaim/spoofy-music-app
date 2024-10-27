import { gql } from '@apollo/client';

export const USER_REGISTRATION = gql`
  mutation MyMutation(
    $userName: String!
    $password: String!
    $email: String!
    $coordinates: [Float]!
  ) {
    createUser(
      input: {
        user: {
          userName: $userName
          password: $password
          email: $email
          coordinates: $coordinates
        }
      }
    ) {
      clientMutationId
      user {
        id
        userName
        password
        email
        coordinates
      }
    }
  }
`;
