import { createSlice } from '@reduxjs/toolkit';

interface CarData {
  name: string;
  color: string;
}
interface CarFormState {
  newCar: CarData;
  updatedCar: CarData;
}

const initialState: CarFormState = {
  newCar: {
    name: '',
    color: '#000000',
  },
  updatedCar: {
    name: '',
    color: '',
  },
};

export const carFormSlice = createSlice({
  name: 'carForm',
  initialState,
  reducers: {
    setNewCarFormData: (state, action) => {
      state.newCar = { ...state.newCar, ...action.payload };
      return state;
    },
    setUpdatedCarFormData: (state, action) => {
      state.updatedCar = { ...state.updatedCar, ...action.payload };
      return state;
    },
  },
});

export const { setNewCarFormData, setUpdatedCarFormData } =
  carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;
