import { Button } from '@mui/material';
import CarForm from '../CarForm/CarForm';

import styles from './ControlPanel.module.css';
import generateRandomCars from '../../helpers/generateRandomCars';
import { setGeneratedCars } from '../../store/car/carSlice';
import { useAppDispatch } from '../../store/store';

function ControlPanel() {
  const dispatch = useAppDispatch();
  const handleGenerateButtonClick = () => {
    const generatedCars = generateRandomCars();

    dispatch(setGeneratedCars(generatedCars));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles['race-controls']}>
        <Button variant="outlined" size="small">
          Race
        </Button>
        <Button variant="outlined" size="small">
          Reset
        </Button>
      </div>

      <CarForm type="create" />
      <CarForm type="update" />

      <Button
        variant="outlined"
        size="small"
        onClick={handleGenerateButtonClick}
      >
        Generate cars
      </Button>
    </div>
  );
}

export default ControlPanel;
