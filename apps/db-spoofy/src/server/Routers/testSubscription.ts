import { date } from 'zod';
import { mainClient } from '../../../src/apolloConfig/apolloConnection';
import { ADD_PLAYLIST_SUBSCRIPTION } from '../../../src/server/querys/subscription/addPlaylistSubscription';

export const test = () => {
  const t = mainClient
    .subscribe({ query: ADD_PLAYLIST_SUBSCRIPTION })
    .subscribe({
      next(data) {
        console.log(data.data.listen);
      },
    });
  return t;
  console.log('-------------yossef-------------');
};
