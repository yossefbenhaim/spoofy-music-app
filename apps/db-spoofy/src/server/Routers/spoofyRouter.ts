import { router, publicProcedure } from '../trpc';
import { Query, UsersConnection } from '../../types/spoofyTypes';
import { mainClient } from '../../apolloConfig/apolloConnection';
import { GET_ALL_USERS } from '../query/getUsers';
export const spoofyRouter = router({
  getUsers: publicProcedure.query<UsersConnection>(async () => {
    const allUsers = await mainClient.query<Required<Pick<Query, 'allUsers'>>>({
      query: GET_ALL_USERS,
      fetchPolicy: 'no-cache',
    });

    const users = allUsers.data.allUsers;
    return users;
  }),
});

export type AppRouter = typeof spoofyRouter;
