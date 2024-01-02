import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { graphqlAPI } from '@/store/GraphQl/graphqlAPI/graphqlAPI';
import graphqlSlice from '@/store/GraphQl/graphqlSlice.ts';

const rootReducer = combineReducers({
  graphqlSlice,
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
