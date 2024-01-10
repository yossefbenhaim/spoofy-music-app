import { Artist as ArtistInfo } from '@spoofy/spoofy-types';
export type Artist = Pick<ArtistInfo, 'id' | 'name'>;
