import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import cardsPerPageSlice from './cardsPerPageSlice';

const store = configureStore({
  reducer: {
    search: searchSlice,
    cardsPerPage: cardsPerPageSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
