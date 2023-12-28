import { gql } from "@apollo/client"; 

export const GET_ALL_USERS = gql`
query getUsers {
	allUsers {
	  nodes {
		id
		firstName
		lastName
	  }
	}
  }
  
`;