import { createSlice } from '@reduxjs/toolkit';

interface PagesState {
  garage: { currentPage: number };
  winners: { currentPage: number };
}

const initialState: PagesState = {
  garage: {
    currentPage: 1,
  },
  winners: {
    currentPage: 1,
  },
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setGarageCurrentPage: (state, action) => {
      state.garage.currentPage = action.payload;
      return state;
    },
    setWinnersCurrentPage: (state, action) => {
      state.winners.currentPage = action.payload;
      return state;
    },
  },
});

export const { setGarageCurrentPage, setWinnersCurrentPage } =
  pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;
