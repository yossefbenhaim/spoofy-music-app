import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceName } from 'models/enums/sliceName';
import { User } from 'models/interface/user';

interface CurrentUserSlice {
  user: User | undefined;
}

const initialState: CurrentUserSlice = {
  user: undefined,
};

const CurrentUser = createSlice({
  name: SliceName.currentUser,
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    resetCurrentUser() {
      return initialState;
    },
  },
});

export const { setUser, resetCurrentUser } = CurrentUser.actions;
export default CurrentUser.reducer;
