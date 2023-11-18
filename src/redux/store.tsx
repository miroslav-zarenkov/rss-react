import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import cardsPerPageSlice from './cardsPerPageSlice';
import { dummyApi } from '../api/apiSlice';
import totalProductsSlice from './totalProductsSlice';
import currentPageSlice from './currentPageSlice';

const store = configureStore({
  reducer: {
    search: searchSlice,
    cardsPerPage: cardsPerPageSlice,
    totalProducts: totalProductsSlice,
    currentPage: currentPageSlice,
    [dummyApi.reducerPath]: dummyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
