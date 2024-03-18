import { PlaylistsongInput } from '../../spoofyTypes';
export type PlaylistSong = Pick<PlaylistsongInput, 'songId' | 'playlistId'>;
