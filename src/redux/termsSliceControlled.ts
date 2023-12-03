import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  termsControlled: boolean;
};

const initialState: State = {
  termsControlled: false,
};

const termsSlice = createSlice({
  name: 'termsControlled',
  initialState,
  reducers: {
    setTerms: (state, action: PayloadAction<boolean>) => {
      state.termsControlled = action.payload;
    },
  },
});

export const { setTerms } = termsSlice.actions;
export default termsSlice.reducer;
