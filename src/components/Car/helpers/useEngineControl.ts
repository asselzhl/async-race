import { useState } from 'react';
import { driveCar, changeEngineStatus } from './apiServices';

interface CarsItem {
  name: string;
  color: string;
  id: number;
}

export const useEngineControl = (car: CarsItem) => {
  const [animationDuration, setAnimationDuration] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartEngine = async () => {
    setIsAnimating(false);

    const response = await changeEngineStatus({
      carID: car.id,
      status: 'started',
    });

    if (response?.statusText === 'OK') {
      const { velocity, distance } = response.data;
      const time = distance / velocity;
      setAnimationDuration(time);
      setIsAnimating(true);
      driveCar(car.id);
    }
  };

  const handleStopEngine = async () => {
    await changeEngineStatus({ carID: car.id, status: 'stopped' });
    setIsAnimating(false);
  };

  return {
    animationDuration,
    isAnimating,
    handleStartEngine,
    handleStopEngine,
  };
};
