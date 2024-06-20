import { createSlice } from '@reduxjs/toolkit';
import { StateStatus, stateStatus } from '../constants';
import { getWinners } from './winnersThunk';

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
    builder.addCase(getWinners.fulfilled, (state, action) => {
      state.status = stateStatus.succeeded;
      state.list = action.payload.data;
      return state;
    });
  },
});

export const winnersReducer = winnersSlice.reducer;
