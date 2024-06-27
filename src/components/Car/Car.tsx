import styles from './Car.module.css';

import { ManagementButtons } from './components/ManagementButtons';
import { EngineControlButtons } from './components/EngineControlButtons';

import { useCarEngine } from './helpers/useCarEngine';
import { getCarAnimation } from './helpers/getCarAnimation';
import { CarIcon } from './components/CarIcon';

interface CarsItem {
  name: string;
  color: string;
  id: number;
}
interface CarProps {
  car: CarsItem;
}

export function Car({ car }: CarProps) {
  const { carStatus, animationDuration, handleStartEngine, handleStopEngine } =
    useCarEngine(car);
  return (
    <div className={styles.wrapper}>
      <ManagementButtons car={car} />
      <EngineControlButtons
        handleStartEngine={handleStartEngine}
        handleStopEngine={handleStopEngine}
        isDriving={carStatus !== 'initial'}
      />

      <div className={styles.road}>
        <CarIcon
          color={car.color}
          carStyle={getCarAnimation({ carStatus, animationDuration })}
        />

        <h5 className={styles['car-name']}>{car.name}</h5>
      </div>
    </div>
  );
}
