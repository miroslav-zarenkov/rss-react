import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  emailControlled: string;
};

const initialState: State = {
  emailControlled: '',
};

const emailSlice = createSlice({
  name: 'emailControlled',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.emailControlled = action.payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;
