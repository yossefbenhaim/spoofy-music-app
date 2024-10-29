import { spoofyGraphql } from '../../../../../graphql';

const ADD_SONG = spoofyGraphql(`
  mutation CreateSong($name: String!, $artistId: UUID!, $duration: Int!) {
    createSong(
      input: { song: { name: $name, artistId: $artistId, duration: $duration } }
    ) {
      clientMutationId
      song {
        id
        name
        duration
        artistByArtistId {
          name
        }
      }
    }
  }
`);

export default ADD_SONG;
