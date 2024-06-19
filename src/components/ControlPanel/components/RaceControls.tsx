import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

import styles from '../ControlPanel.module.css';
import { useAppDispatch } from '../../../store/store';
import { setIsRacing } from '../../../store/race/raceSlice';
import { getIsRacing } from '../../../store/race/selectors';

export function RaceControls() {
  const dispatch = useAppDispatch();
  const isRacing = useSelector(getIsRacing);

  const handleRaceButtonClick = () => {
    dispatch(setIsRacing(true));
  };

  const handleResetButtonClick = () => {
    dispatch(setIsRacing(false));
  };
  return (
    <div className={styles['race-controls']}>
      <Button
        variant="outlined"
        size="small"
        onClick={handleRaceButtonClick}
        disabled={isRacing}
      >
        Race
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={handleResetButtonClick}
        disabled={!isRacing}
      >
        Reset
      </Button>
    </div>
  );
}
