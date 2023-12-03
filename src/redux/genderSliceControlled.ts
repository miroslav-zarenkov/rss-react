import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  genderControlled: string;
};

const initialState: State = {
  genderControlled: '',
};

const genderSlice = createSlice({
  name: 'genderControlled',
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<string>) => {
      state.genderControlled = action.payload;
    },
  },
});

export const { setGender } = genderSlice.actions;
export default genderSlice.reducer;
