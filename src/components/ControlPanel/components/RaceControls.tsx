import { Button } from '@mui/material';

import { useSelector } from 'react-redux';
import styles from '../ControlPanel.module.css';
import { getRacingStatus } from '../../../store/race/selectors';
import { useAppDispatch } from '../../../store/store';
import { resetRace, setRacingStatus } from '../../../store/race/raceSlice';

export function RaceControls() {
  const dispatch = useAppDispatch();
  const racingStatus = useSelector(getRacingStatus);
  const handleRaceButtonClick = () => {
    dispatch(setRacingStatus('racing'));
  };

  const handleResetButtonClick = () => {
    dispatch(setRacingStatus('reset'));
    dispatch(resetRace());
  };
  return (
    <div className={styles['race-controls']}>
      <Button
        variant="outlined"
        size="small"
        onClick={handleRaceButtonClick}
        disabled={racingStatus !== 'initial'}
      >
        Race
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={handleResetButtonClick}
        disabled={!(racingStatus !== 'initial')}
      >
        Reset
      </Button>
    </div>
  );
}
