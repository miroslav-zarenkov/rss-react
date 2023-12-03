import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  emailUncontrolled: string;
};

const initialState: State = {
  emailUncontrolled: '',
};

const emailSlice = createSlice({
  name: 'emailUncontrolled',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.emailUncontrolled = action.payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;
