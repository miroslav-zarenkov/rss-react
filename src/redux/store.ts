import { configureStore } from '@reduxjs/toolkit';
import nameSlice from './nameSlice';
import ageSlice from './ageSlice';
import emailSlice from './emailSlice';
import genderSlice from './genderSlice';
import termsSlice from './termsSlice';
import countrySlice from './countrySlice';

const store = configureStore({
  reducer: {
    name: nameSlice,
    age: ageSlice,
    email: emailSlice,
    gender: genderSlice,
    terms: termsSlice,
    countries: countrySlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
