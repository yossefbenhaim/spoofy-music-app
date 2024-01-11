import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceName } from 'models/enums/sliceName';
import { User } from 'models/interface/user';

interface UsersSlice {
  users: User[];
}

const initialState: UsersSlice = {
  users: [],
};

const Users = createSlice({
  name: SliceName.users,
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { setUsers, deleteUser } = Users.actions;
export default Users.reducer;
