import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import languageReducer from '../slice/languageSlice';

export const store = configureStore({
  reducer: {
    languageState: languageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
