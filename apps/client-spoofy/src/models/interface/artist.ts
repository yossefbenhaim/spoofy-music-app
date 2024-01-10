import { Artist as ArtistInfo } from '@spoofy/spoofy-types';
export type Artist = Pick<ArtistInfo, 'id' | 'name'>;

// export interface Artist {
//   id: string;
//   name: string;
// }
