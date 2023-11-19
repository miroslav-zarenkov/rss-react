import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  totalProducts: number;
};

const initialState: State = {
  totalProducts: 0,
};

const totalProductsSlice = createSlice({
  name: 'totalProducts',
  initialState,
  reducers: {
    setTotalProducts: (state, action: PayloadAction<number>) => {
      state.totalProducts = action.payload;
    },
  },
});

export const { setTotalProducts } = totalProductsSlice.actions;
export default totalProductsSlice.reducer;
