import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean;
  email: string;
}
const initialState: AuthState = {
  isAuth: false,
  email: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialState,
  reducers: {
    setDataUser(state, action: PayloadAction<AuthState>): void {
      state.isAuth = action.payload.isAuth;
      state.email = action.payload.email;
    },
  },
});
export default authSlice.reducer;
export const { setDataUser } = authSlice.actions;
