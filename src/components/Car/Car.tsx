import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaCarSide } from 'react-icons/fa6';

import styles from './Car.module.css';

import { ManagementButtons } from './components/ManagementButtons';
import { EngineControlButtons } from './components/EngineControlButtons';
import { useEngineControl } from './helpers/useEngineControl';
import { getCarAnimationStyle } from './helpers/getCarAnimationStyle';
import { getIsRacing } from '../../store/race/selectors';

interface CarsItem {
  name: string;
  color: string;
  id: number;
}
interface CarProps {
  car: CarsItem;
}

export function Car({ car }: CarProps) {
  const isRacing = useSelector(getIsRacing);
  const {
    animationDuration,
    isAnimating,
    handleStartEngine,
    handleStopEngine,
  } = useEngineControl(car);

  const carAnimation = getCarAnimationStyle(isAnimating, animationDuration);

  useEffect(() => {
    if (isRacing) {
      handleStartEngine();
    }
    if (!isRacing) {
      handleStopEngine();
    }
  });

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
        style={isAnimating ? carAnimation : { transform: 'translateX(0)' }}
      />

      <h5 className={styles['car-name']}>{car.name}</h5>
    </div>
  );
}
