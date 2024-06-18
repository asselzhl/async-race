import { Button } from '@mui/material';
import { CarForm } from '../CarForm/CarForm';

import styles from './ControlPanel.module.css';
import { generateRandomCar } from '../../helpers/generateRandomCar';
import { useAppDispatch } from '../../store/store';
import { createCar } from '../../store/car/carThunk';

export function ControlPanel() {
  const dispatch = useAppDispatch();

  const handleGenerateButtonClick = () => {
    const totalRandomCars = 100;
    for (let i = 0; i < totalRandomCars; i += 1) {
      const randomCar = generateRandomCar();
      dispatch(createCar(randomCar));
    }
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
        Generate 100 cars
      </Button>
    </div>
  );
}
