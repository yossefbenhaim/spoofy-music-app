import {User as UserInfo} from '@spoofy/spoofy-types'
export type User = Pick<UserInfo, 'id' | 'firstName' | 'lastName' | 'coordinates'|'address'>;
