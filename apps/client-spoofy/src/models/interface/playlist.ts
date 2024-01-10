import { Playlist as PlaylisInfo } from '@spoofy/spoofy-types';
export type Playlist = Pick<
  PlaylisInfo,
  'id' | 'name' | 'creatorId' 
> & {
  songs: string[];
};
