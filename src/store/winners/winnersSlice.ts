import { createSlice } from '@reduxjs/toolkit';
import { StateStatus, stateStatus } from '../constants';
import {
  createWinner,
  deleteWinner,
  getWinners,
  updateWinner,
} from './winnersThunk';

interface Winner {
  id: number;
  wins: number;
  time: number;
}

interface CarsState {
  status: StateStatus;
  list: Winner[];
  error: null | string;
}

const initialState: CarsState = {
  status: stateStatus.idle,
  list: [],
  error: null,
};

export const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWinners.fulfilled, (state, action) => {
        state.status = stateStatus.succeeded;
        state.list = action.payload.data;
        return state;
      })
      .addCase(createWinner.fulfilled, (state, action) => {
        state.list.push(action.payload.data);
        return state;
      })
      .addCase(updateWinner.fulfilled, (state, action) => {
        const updatedWinner = action.payload.data;
        state.list = state.list.map((winner) =>
          winner.id === updatedWinner.id ? updatedWinner : winner
        );
        return state;
      })
      .addCase(deleteWinner.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (winner) => winner.id !== action.payload.id
        );
        return state;
      });
  },
});

export const winnersReducer = winnersSlice.reducer;
