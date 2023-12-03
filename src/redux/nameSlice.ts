import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  name: string;
};

const initialState: State = {
  name: '',
};

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
