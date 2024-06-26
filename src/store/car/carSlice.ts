import { createSlice } from '@reduxjs/toolkit';

type DrivingStatus = 'initial' | 'driving' | 'finished';

interface CarState {
  carStatus: DrivingStatus;
  animationDuration: number;
}

interface CarStateMap {
  [id: string]: CarState;
}

const initialState: CarStateMap = {};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    updateCarStatus: (state, action) => {
      const { carId, carStatus, animationDuration } = action.payload;
      state[carId] = { carStatus, animationDuration };
      return state;
    },
  },
});

export const { updateCarStatus } = carSlice.actions;
export const carReducer = carSlice.reducer;
