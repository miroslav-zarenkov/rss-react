import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  nameUncontrolled: string;
};

const initialState: State = {
  nameUncontrolled: '',
};

const nameSlice = createSlice({
  name: 'nameUncontrolled',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.nameUncontrolled = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
