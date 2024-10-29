import { gql } from '@apollo/client';

const DELETE_PLAYLIST_SONG_BY_PLAYLIST_AND_SONG_ID = gql`
  mutation deletePlaylistSong($playlistId: UUID!, $songId: UUID!) {
    deletePlaylistsongByPlaylistIdAndSongId(
      input: { playlistId: $playlistId, songId: $songId }
    ) {
      clientMutationId
      deletedPlaylistsongId
    }
  }
`;

export default DELETE_PLAYLIST_SONG_BY_PLAYLIST_AND_SONG_ID;
