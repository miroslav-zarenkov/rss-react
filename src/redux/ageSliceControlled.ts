import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  ageControlled: string;
};

const initialState: State = {
  ageControlled: '',
};

const ageSlice = createSlice({
  name: 'ageControlled',
  initialState,
  reducers: {
    setAge: (state, action: PayloadAction<string>) => {
      state.ageControlled = action.payload;
    },
  },
});

export const { setAge } = ageSlice.actions;
export default ageSlice.reducer;
