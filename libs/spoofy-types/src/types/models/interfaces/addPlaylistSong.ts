import { PlaylistsongInput } from '@/types/spoofyTypes';
export type PlaylistSong = Pick<PlaylistsongInput, 'songId' | 'playlistId'>;
