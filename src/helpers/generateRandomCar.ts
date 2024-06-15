import { v4 } from 'uuid';
import { faker } from '@faker-js/faker';

const generateRandomCar = () => {
  const randomCar = {
    id: v4(),
    name: faker.vehicle.vehicle(),
    color: faker.color.rgb(),
  };
  return randomCar;
};

export default generateRandomCar;
