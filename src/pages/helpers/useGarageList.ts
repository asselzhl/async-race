import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { getWinner, getWinnerCarName } from '../../store/race/selectors';
import { getWinnersList } from '../../store/winners/selectors';
import { createWinner, updateWinner } from '../../store/winners/winnersThunk';
import { resetRace } from '../../store/race/raceSlice';

// TODO: type errors
export const useGarageList = () => {
  const dispatch = useAppDispatch();
  const [showWinner, setShowWinner] = useState(false);
  const winner = useSelector(getWinner);
  const winnerCarName = useSelector(getWinnerCarName);
  const winnersList = useSelector(getWinnersList);

  useEffect(() => {
    const isWinnerDefined = !!winner.id;
    setShowWinner(isWinnerDefined);

    if (isWinnerDefined) {
      const winnerIndex = winnersList.findIndex(
        (winnerFromList) => winnerFromList.id === winner.id
      );
      if (winnerIndex === -1) {
        const newWinner = { ...winner, wins: 1 };
        dispatch(createWinner(newWinner));
      } else {
        const { wins, time } = winnersList[winnerIndex];
        const updatedWinner = {
          wins: 1 + wins,
          time: Math.min(winner.time, time),
        };
        dispatch(updateWinner({ id: winner.id, winnerData: updatedWinner }));
      }
    }
  }, [winner, dispatch, winnersList]);

  const handleWinnerModalClose = () => {
    setShowWinner(false);
    dispatch(resetRace());
  };
  return {
    showWinner,
    winnerCarName,
    winner,
    handleWinnerModalClose,
  };
};
