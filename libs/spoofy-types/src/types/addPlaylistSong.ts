import { PlaylistSongInput } from '../types/spoofyTypes';
export type PlaylistsSong = Pick<PlaylistSongInput, 'songId' | 'playlistId'>;
