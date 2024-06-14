import { v4 } from 'uuid';
import { faker } from '@faker-js/faker';

const totalRandomCars = 100;

const generateRandomCars = () => {
  const cars = [];

  for (let i = 0; i < totalRandomCars; i += 1) {
    cars.push({
      id: v4(),
      name: faker.vehicle.vehicle(),
      color: faker.color.rgb(),
    });
  }
  return cars;
};

export default generateRandomCars;
