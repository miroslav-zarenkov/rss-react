import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  imageControlled: string | ArrayBuffer | null;
};

const initialState: State = {
  imageControlled: '',
};

const imageSlice = createSlice({
  name: 'imageControlled',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string | ArrayBuffer | null>) => {
      state.imageControlled = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
