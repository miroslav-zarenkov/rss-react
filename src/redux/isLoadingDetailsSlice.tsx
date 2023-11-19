import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  isLoadingDetails: boolean;
};

const initialState: State = {
  isLoadingDetails: false,
};

const isLoadingDetailsSlice = createSlice({
  name: 'isLoadingDetails',
  initialState,
  reducers: {
    setIsLoadingDetails: (state, action: PayloadAction<boolean>) => {
      state.isLoadingDetails = action.payload;
    },
  },
});

export const { setIsLoadingDetails } = isLoadingDetailsSlice.actions;
export default isLoadingDetailsSlice.reducer;
