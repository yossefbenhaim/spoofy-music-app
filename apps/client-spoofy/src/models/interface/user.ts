import { User as UserInfo } from '@spoofy/spoofy-types';
export type User = Pick<
  UserInfo,
  'id' | 'userName' | 'email' | 'coordinates' | 'password'
>;
