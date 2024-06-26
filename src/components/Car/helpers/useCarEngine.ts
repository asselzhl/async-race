import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { RootState, useAppDispatch } from '../../../store/store';
import { changeEngineStatus } from './apiServices';
import { updateCarStatus } from '../../../store/car/carSlice';
import {
  recordRaceTimes,
  setRacingStatus,
} from '../../../store/race/raceSlice';

interface Car {
  name: string;
  color: string;
  id: number;
}
type EngineStatus = 'started' | 'drive' | 'stopped';

const updateCarStatusAction = (
  dispatch: Dispatch,
  carId: number,
  status: string,
  duration: number
) => {
  dispatch(
    updateCarStatus({
      carId,
      carStatus: status,
      animationDuration: duration,
    })
  );
};

// TODO type error
const changeEngineStatusAndUpdate = async (
  carId: number,
  status: EngineStatus,
  dispatch: Dispatch
): Promise<number> => {
  const response = await changeEngineStatus({ carID: carId, status });
  const { velocity, distance } = response.data;
  const timeInSeconds = Math.round(distance / velocity / 10) / 100;

  updateCarStatusAction(dispatch, carId, 'driving', timeInSeconds);

  return timeInSeconds;
};

const handleDriveCar = async (
  carId: number,
  dispatch: Dispatch,
  timeInSeconds: number
) => {
  try {
    await changeEngineStatus({ carID: carId, status: 'drive' });
    dispatch(
      recordRaceTimes({
        carId,
        time: timeInSeconds,
      })
    );
    dispatch(setRacingStatus('finished'));
  } catch {
    updateCarStatusAction(dispatch, carId, 'finished', timeInSeconds);
  }
};

export const useCarEngine = (car: Car) => {
  const dispatch = useAppDispatch();
  const carState = useSelector((state: RootState) => state.car[car.id]) || {
    carStatus: 'initial',
    animationDuration: 0,
  };
  const { carStatus, animationDuration } = carState;

  const handleStartEngine = useCallback(async () => {
    const timeInSeconds = await changeEngineStatusAndUpdate(
      car.id,
      'started',
      dispatch
    );
    handleDriveCar(car.id, dispatch, timeInSeconds);
  }, [car.id, dispatch]);

  const handleStopEngine = useCallback(async () => {
    updateCarStatusAction(dispatch, car.id, 'initial', 0);
    await changeEngineStatus({ carID: car.id, status: 'stopped' });
  }, [car.id, dispatch]);

  return { carStatus, animationDuration, handleStartEngine, handleStopEngine };
};
