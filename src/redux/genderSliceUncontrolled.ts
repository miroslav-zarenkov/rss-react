import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  genderUncontrolled: string;
};

const initialState: State = {
  genderUncontrolled: '',
};

const genderSlice = createSlice({
  name: 'genderUncontrolled',
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<string>) => {
      state.genderUncontrolled = action.payload;
    },
  },
});

export const { setGender } = genderSlice.actions;
export default genderSlice.reducer;
