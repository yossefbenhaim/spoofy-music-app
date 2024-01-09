import { useDispatch } from 'react-redux';
import { setUsers } from 'redux/slice/users';
import { User } from '@spoofy/spoofy-types';

import { trpc } from 'trpc/trpcProvider';
import { useEffect } from 'react';
const usersQuery = () => {
  const dispatch = useDispatch();

  const usersData = trpc.spoofyQueryRouter.getUsers.useQuery();
  useEffect(() => {
    if (usersData.isSuccess) {
      const users: User[] = usersData.data.nodes as User[];
      dispatch(setUsers(users));
    }
  }, [usersData]);
};

export default usersQuery;
