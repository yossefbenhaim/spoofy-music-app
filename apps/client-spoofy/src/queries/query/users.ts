import { gql } from '@apollo/client';

const GET_USERS = gql`
    query MyQuery {
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
