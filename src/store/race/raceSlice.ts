import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRacing: false,
};

export const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    setIsRacing: (state, action) => {
      state.isRacing = action.payload;
      return state;
    },
  },
});

export const raceReducer = raceSlice.reducer;
export const { setIsRacing } = raceSlice.actions;
