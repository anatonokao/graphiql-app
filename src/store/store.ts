import { combineReducers, configureStore } from '@reduxjs/toolkit';
import graphqlSlice from "@/store/GraphQl/graphqlSlice.ts";
import {graphqlAPI} from "@/store/GraphQl/graphqlAPI/graphqlAPI.ts";
import authSlice from "@/store/Auth/authSlice.ts";

const rootReducer = combineReducers({
  graphqlSlice,
  authSlice,
  [graphqlAPI.reducerPath]: graphqlAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(graphqlAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
