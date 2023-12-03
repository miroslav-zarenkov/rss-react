import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  ageUncontrolled: string;
};

const initialState: State = {
  ageUncontrolled: '',
};

const ageSlice = createSlice({
  name: 'ageUncontrolled',
  initialState,
  reducers: {
    setAge: (state, action: PayloadAction<string>) => {
      state.ageUncontrolled = action.payload;
    },
  },
});

export const { setAge } = ageSlice.actions;
export default ageSlice.reducer;
