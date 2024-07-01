import { Button } from '@mui/material';
import { CarForm } from '../CarForm/CarForm';

import styles from './ControlPanel.module.css';
import { generateRandomCar } from '../../helpers/generateRandomCar';
import { useAppDispatch } from '../../store/store';
import { createCar } from '../../store/carList/carListThunk';
import { RaceControls } from './components/RaceControls';

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
      <RaceControls />

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
