import { configureStore } from '@reduxjs/toolkit';
import nameSlice from './nameSlice';
import ageSlice from './ageSlice';
import emailSlice from './emailSlice';
import genderSlice from './genderSlice';
import termsSlice from './termsSlice';

const store = configureStore({
  reducer: {
    name: nameSlice,
    age: ageSlice,
    email: emailSlice,
    gender: genderSlice,
    terms: termsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
