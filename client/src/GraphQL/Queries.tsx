import {gql} from '@apollo/client';

/**
 * The type query implementation to access graphql apollo server 
 * and match the require field pass in the server.
 */
export const PAGE_QUERY = gql`
query ($id: ID!)  {
  page(id: $id){
    results {
      name
      mass
      height
      gender
      homeworld
    }
  },
}
`
export default PAGE_QUERY;
  