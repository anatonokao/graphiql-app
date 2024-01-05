import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
  token: string;
  email: string;
}
const initialState: AuthState = {
  isAuth: false,
  token: '',
  email: 'string',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialState,
  reducers: {
    setDataUser(state, action: PayloadAction<AuthState>): void {
      state.isAuth = action.payload.isAuth;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});
export default authSlice.reducer;
export const { setDataUser } = authSlice.actions;
