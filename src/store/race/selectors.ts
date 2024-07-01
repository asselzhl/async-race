import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCarsList } from '../carList/selectors';

export const getRacingStatus = (state: RootState) => state.race.racingStatus;
export const getWinner = (state: RootState) => state.race.winner;

export const getWinnerCarName = createSelector(
  [getCarsList, getWinner],
  (carsList, winner) => {
    return carsList.find((car) => car.id === winner.id)?.name;
  }
);
