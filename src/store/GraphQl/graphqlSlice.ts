import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { getErrors } from '@/store/store-helpers.ts';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI.ts';
import { goToast } from '@/components/toast-helper.ts';

interface GraphqlState {
  apiUrl: string;
  request: string;
  vars: string;
  headers: string;
  response: string;
  error: string[];
}

const initState: GraphqlState = {
  apiUrl: 'https://rickandmortyapi.com/graphql',
  request: '',
  vars: '',
  headers: '',
  response: '',
  error: [],
};

export const graphqlSlice = createSlice({
  name: 'graphqlSlice',
  initialState: initState,
  reducers: {
    setApiUrl(state, action: PayloadAction<string>): void {
      state.apiUrl = action.payload;
    },
    setRequest(state, action: PayloadAction<string>): void {
      state.request = action.payload;
    },
    setVars(state, action: PayloadAction<string>): void {
      state.vars = action.payload;
    },
    setHeaders(state, action: PayloadAction<string>): void {
      state.headers = action.payload;
    },
    setResponse(state, action: PayloadAction<string>): void {
      state.response = action.payload;
    },
    setError(
      state,
      action: PayloadAction<FetchBaseQueryError | SerializedError | null>,
    ): void {
      state.error = [];
      const { payload } = action;
      if (payload) {
        state.response = JSON.stringify(payload, null, 2);
        state.error = getErrors(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      graphqlAPI.endpoints?.getData.matchFulfilled,
      (state, action) => {
        state.response = action.payload
          ? JSON.stringify(action.payload, null, 2)
          : '';
        goToast('Request Successfully Completed!', 'success');
      },
    );
    builder.addMatcher(
      graphqlAPI.endpoints?.getData.matchRejected,
      (state, action) => {
        state.error = [];
        const { payload } = action;
        if (payload) {
          state.response = JSON.stringify(payload, null, 2);
          state.error = getErrors(payload);
        }
        goToast('Something Went Wrong!', 'error');
      },
    );
  },
});

export const {
  setApiUrl,
  setRequest,
  setVars,
  setHeaders,
  setResponse,
  setError,
} = graphqlSlice.actions;

export default graphqlSlice.reducer;
