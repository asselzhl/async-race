import { RootState } from '../store';

export const getNewCarFormData = (state: RootState) => state.carForm.newCar;
export const getUpdatedCarFormData = (state: RootState) =>
  state.carForm.updatedCar;
