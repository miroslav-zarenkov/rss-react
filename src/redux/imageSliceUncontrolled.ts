import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  imageUncontrolled: string | ArrayBuffer | null;
};

const initialState: State = {
  imageUncontrolled: '',
};

const imageSlice = createSlice({
  name: 'imageUncontrolled',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string | ArrayBuffer | null>) => {
      state.imageUncontrolled = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
