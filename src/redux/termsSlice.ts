import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  terms: boolean;
};

const initialState: State = {
  terms: false,
};

const termsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {
    setTerms: (state, action: PayloadAction<boolean>) => {
      state.terms = action.payload;
    },
  },
});

export const { setTerms } = termsSlice.actions;
export default termsSlice.reducer;
