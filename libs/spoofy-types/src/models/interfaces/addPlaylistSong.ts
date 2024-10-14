import { PlaylistSongInput } from '../../types/spoofyTypes';
export type PlaylistSong = Pick<PlaylistSongInput, 'songId' | 'playlistId'>;
