import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  gender: string;
};

const initialState: State = {
  gender: '',
};

const genderSlice = createSlice({
  name: 'gender',
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
  },
});

export const { setGender } = genderSlice.actions;
export default genderSlice.reducer;
