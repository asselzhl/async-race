import { createSlice } from '@reduxjs/toolkit';
import { StateStatus, stateStatus } from '../constants';
import { createCar, deleteCar, getCars, updateCar } from './carThunk';

interface Car {
  name: string;
  color: string;
  id: number;
}

interface CarsState {
  status: StateStatus;
  list: Car[];
  error: null | string;
}

const initialState: CarsState = {
  status: stateStatus.idle,
  list: [],
  error: null,
};

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setGeneratedCars: (state, action) => {
      state.list = [...state.list, ...action.payload];
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.status = stateStatus.succeeded;
        state.list = action.payload.data;
        return state;
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.list.push(action.payload.data);
        return state;
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        const updatedCourse = action.payload.data;
        state.list = state.list.map((car) =>
          car.id === updatedCourse.id ? updatedCourse : car
        );
        return state;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.list = state.list.filter((car) => car.id !== action.payload.id);
        return state;
      });
  },
});

export const { setGeneratedCars } = carSlice.actions;
export const carReducer = carSlice.reducer;
