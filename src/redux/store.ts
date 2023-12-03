import { configureStore } from '@reduxjs/toolkit';
import nameSliceControlled from './nameSliceControlled';
import ageSliceControlled from './ageSliceControlled';
import emailSliceControlled from './emailSliceControlled';
import genderSliceControlled from './genderSliceControlled';
import termsSliceControlled from './termsSliceControlled';
import countrySlice from './countrySlice';
import imageSliceControlled from './imageSliceControlled';
import nameSliceUncontrolled from './nameSliceUncontrolled';
import ageSliceUncontrolled from './ageSliceUncontrolled';
import emailSliceUncontrolled from './emailSliceUncontrolled';
import genderSliceUncontrolled from './genderSliceUncontrolled';
import termsSliceUncontrolled from './termsSliceUncontrolled';
import imageSliceUncontrolled from './imageSliceUncontrolled';

const store = configureStore({
  reducer: {
    nameControlled: nameSliceControlled,
    ageControlled: ageSliceControlled,
    emailControlled: emailSliceControlled,
    genderControlled: genderSliceControlled,
    termsControlled: termsSliceControlled,
    countries: countrySlice,
    imageControlled: imageSliceControlled,
    nameUncontrolled: nameSliceUncontrolled,
    ageUncontrolled: ageSliceUncontrolled,
    emailUncontrolled: emailSliceUncontrolled,
    genderUncontrolled: genderSliceUncontrolled,
    termsUncontrolled: termsSliceUncontrolled,
    imageUncontrolled: imageSliceUncontrolled,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
