import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getRacingStatus } from '../../../store/race/selectors';
import { useAppDispatch } from '../../../store/store';
import { setRacingStatus } from '../../../store/race/raceSlice';

interface EngineControlButtonsProps {
  handleStartEngine: () => void;
  handleStopEngine: () => void;
  isDriving: boolean;
}

export function EngineControlButtons({
  handleStartEngine,
  handleStopEngine,
  isDriving,
}: EngineControlButtonsProps) {
  const dispatch = useAppDispatch();
  const racingStatus = useSelector(getRacingStatus);
  useEffect(() => {
    if (racingStatus === 'racing') {
      handleStartEngine();
    }
    if (racingStatus === 'reset') {
      handleStopEngine();
      dispatch(setRacingStatus('initial'));
    }
  }, [racingStatus, dispatch, handleStartEngine, handleStopEngine]);
  return (
    <ButtonGroup variant="contained" size="small" orientation="vertical">
      <Button onClick={handleStartEngine} disabled={isDriving}>
        A
      </Button>
      <Button onClick={handleStopEngine} disabled={!isDriving}>
        B
      </Button>
    </ButtonGroup>
  );
}
