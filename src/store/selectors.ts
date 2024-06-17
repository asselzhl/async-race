import { RootState } from './store';

// Cars selectors
export const getCarsStateStatus = (state: RootState) => state.cars.status;
export const getCarsList = (state: RootState) => state.cars.list;

// Car Form selectors
export const getNewCarFormData = (state: RootState) => state.carForm.newCar;
export const getUpdatedCarFormData = (state: RootState) =>
  state.carForm.updatedCar;

// Pages selectors
export const getCurrentPage = (state: RootState) => state.pages.currentPage;
