import { mainClient } from '../../../src/apolloConfig/apolloConnection';
import { ADD_PLAYLIST_SUBSCRIPTION } from '../../../src/server/querys/subscription/addPlaylistSubscription';

export const test = () => {
  mainClient.subscribe({ query: ADD_PLAYLIST_SUBSCRIPTION }).subscribe({
    next(data) {
      console.log(data.data.listen);
    },
  });
  console.log('-------------yossef-------------');
};
