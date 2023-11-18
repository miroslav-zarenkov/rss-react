import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  cardsPerPage: string;
};

const initialState: State = {
  cardsPerPage: localStorage.getItem('cardsPerPage') ?? '5',
};

const cardsPerPageSlice = createSlice({
  name: 'cardsPerPage',
  initialState,
  reducers: {
    setCardsPerPage: (state, action: PayloadAction<string>) => {
      state.cardsPerPage = action.payload;
    },
  },
});

export const { setCardsPerPage } = cardsPerPageSlice.actions;
export default cardsPerPageSlice.reducer;
