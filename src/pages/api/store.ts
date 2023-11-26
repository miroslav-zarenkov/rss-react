import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { dummyApi } from './dummyApi';

export const makeStore = () =>
  configureStore({
    reducer: {
      [dummyApi.reducerPath]: dummyApi.reducer,
    },
    middleware: (gDM) => gDM().concat(dummyApi.middleware),
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
