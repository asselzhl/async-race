import { FaCarSide } from 'react-icons/fa6';

import styles from './Car.module.css';

import { ManagementButtons } from './components/ManagementButtons';
import { EngineControlButtons } from './components/EngineControlButtons';
import { useEngineControl } from './helpers/useEngineControl';
import { getCarAnimationStyle } from './helpers/getCarAnimationStyle';

interface CarsItem {
  name: string;
  color: string;
  id: number;
}
interface CarProps {
  car: CarsItem;
}

export function Car({ car }: CarProps) {
  const {
    animationDuration,
    isAnimating,
    handleStartEngine,
    handleStopEngine,
  } = useEngineControl(car);

  const carAnimation = getCarAnimationStyle(isAnimating, animationDuration);

  return (
    <div className={styles.wrapper}>
      <ManagementButtons car={car} />
      <EngineControlButtons
        handleStartEngine={handleStartEngine}
        handleStopEngine={handleStopEngine}
        isAnimating={isAnimating}
      />

      <FaCarSide
        size={70}
        color={car.color}
        style={isAnimating ? carAnimation : {}}
      />

      <h5 className={styles['car-name']}>{car.name}</h5>
    </div>
  );
}
