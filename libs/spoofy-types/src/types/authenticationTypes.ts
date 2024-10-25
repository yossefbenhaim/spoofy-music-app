import { UserInput } from './spoofyTypes';

export type LoginUser = Pick<UserInput, 'email' | 'password'>;
export type LogoutUser = Pick<UserInput, 'email'>;
export interface RefreshAccessToken {
  email: string;
  refreshToken: string;
}
