import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GraphqlState {
  request: string;
  vars: string;
  headers: object;
}

const initState: GraphqlState = {
  request: '',
  vars: '',
  headers: {},
};

export const graphqlSlice = createSlice({
  name: 'graphqlSlice',
  initialState: initState,
  reducers: {
    setRequest(state, action: PayloadAction<string>): void {
      state.request = action.payload;
    },
    setVars(state, action: PayloadAction<string>): void {
      state.vars = action.payload;
    },
    setHeaders(state, action: PayloadAction<object>): void {
      state.headers = action.payload;
    },
  },
});

export const { setRequest, setVars, setHeaders } = graphqlSlice.actions;

export default graphqlSlice.reducer;
