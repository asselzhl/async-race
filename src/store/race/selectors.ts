import { RootState } from '../store';

export const getIsRacing = (state: RootState) => state.race.isRacing;
