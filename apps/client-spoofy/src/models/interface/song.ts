import { Song as SongInfo } from '@spoofy/spoofy-types';
export type Song = Pick<SongInfo, 'id' | 'name' | 'duration' | 'artistId'>;
