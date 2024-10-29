import { SliceName } from '@models/enums/sliceName';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  expiresAt: number | null;
}

const initialState: AuthState = {
  accessToken: null,
  expiresAt: null,
};

const authSlice = createSlice({
  name: SliceName.auth,
  initialState,
  reducers: {
    setAccessToken: (
      state,
      action: PayloadAction<{ token: string; expiresIn: number }>
    ) => {
      state.accessToken = action.payload.token;
      state.expiresAt = Date.now() + action.payload.expiresIn * 1000; // שומר את הזמן לפקיעת תוקף
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
      state.expiresAt = null;
    },
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
