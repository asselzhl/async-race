import { createSlice } from '@reduxjs/toolkit';

interface RaceState {
  racingStatus: 'initial' | 'racing' | 'finished' | 'reset';
  raceTimes: { [carId: string]: number };
  winner: { id: number | null; time: number | null };
}

const initialState: RaceState = {
  racingStatus: 'initial',
  raceTimes: {},
  winner: {
    id: null,
    time: null,
  },
};

export const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    setRacingStatus: (state, action) => {
      state.racingStatus = action.payload;
      return state;
    },
    resetRace: (state) => {
      state.raceTimes = initialState.raceTimes;
      state.winner = initialState.winner;
      return state;
    },
    recordRaceTimes: (state, action) => {
      if (state.racingStatus === 'racing') {
        const carResult = action.payload;
        state.raceTimes[carResult.carId] = carResult.time;

        if (
          !state.winner.id ||
          carResult.time < state.raceTimes[state.winner.id]
        ) {
          state.winner.id = carResult.carId;
          state.winner.time = carResult.time;
        }
      }

      return state;
    },
  },
});

export const raceReducer = raceSlice.reducer;
export const { recordRaceTimes, setRacingStatus, resetRace } =
  raceSlice.actions;
