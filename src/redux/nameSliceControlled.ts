import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  nameControlled: string;
};

const initialState: State = {
  nameControlled: '',
};

const nameSlice = createSlice({
  name: 'nameControlled',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.nameControlled = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
