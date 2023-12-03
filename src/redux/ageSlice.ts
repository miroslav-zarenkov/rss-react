import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  age: string;
};

const initialState: State = {
  age: '',
};

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {
    setAge: (state, action: PayloadAction<string>) => {
      state.age = action.payload;
    },
  },
});

export const { setAge } = ageSlice.actions;
export default ageSlice.reducer;
