import { spoofyGraphql } from '../../../../../graphql';
import { ResultOf } from 'gql.tada';
const GET_ARTIST = spoofyGraphql(`
  query allArtists {
    allArtists {
      nodes {
        id
        name
      }
    }
  }
`);

export type GET_ARTIST_TYPE = ResultOf<typeof GET_ARTIST>;

export default GET_ARTIST;
