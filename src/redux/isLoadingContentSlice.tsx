import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  isLoadingContent: boolean;
};

const initialState: State = {
  isLoadingContent: false,
};

const isLoadingContentSlice = createSlice({
  name: 'isLoadingContent',
  initialState,
  reducers: {
    setIsLoadingContent: (state, action: PayloadAction<boolean>) => {
      state.isLoadingContent = action.payload;
    },
  },
});

export const { setIsLoadingContent } = isLoadingContentSlice.actions;
export default isLoadingContentSlice.reducer;
