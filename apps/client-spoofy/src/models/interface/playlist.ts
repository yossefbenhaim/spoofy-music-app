// import {Playlist as PlaylisInfo} from '@spoofy/spoofy-types'
// export type Playlist Pick<PlaylisInfo ,'id'|'name'|'creatorId'|''>
export interface Playlist {
  id: string;
  name: string;
  creatorId: string;
  songs: string[];
}
