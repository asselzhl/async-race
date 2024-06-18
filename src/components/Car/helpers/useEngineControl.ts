import { useState } from 'react';
import { driveCar, makePatchRequest } from './apiServices';

interface CarsItem {
  name: string;
  color: string;
  id: number;
}

const successfulResponseCode = 200;

export const useEngineControl = (car: CarsItem) => {
  const [animationDuration, setAnimationDuration] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartEngine = async () => {
    setIsAnimating(false);
    try {
      const response = await makePatchRequest(car.id, 'started');

      if (response.status === successfulResponseCode) {
        const { velocity, distance } = response.data;
        const time = distance / velocity;
        setAnimationDuration(time);
        setIsAnimating(true);
        driveCar(car.id);
      }
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  const handleStopEngine = async () => {
    try {
      await makePatchRequest(car.id, 'stopped');
      setIsAnimating(false);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  return {
    animationDuration,
    isAnimating,
    handleStartEngine,
    handleStopEngine,
  };
};
