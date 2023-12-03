import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  termsUncontrolled: boolean;
};

const initialState: State = {
  termsUncontrolled: false,
};

const termsSlice = createSlice({
  name: 'termsUncontrolled',
  initialState,
  reducers: {
    setTerms: (state, action: PayloadAction<boolean>) => {
      state.termsUncontrolled = action.payload;
    },
  },
});

export const { setTerms } = termsSlice.actions;
export default termsSlice.reducer;
