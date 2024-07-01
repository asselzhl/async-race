import { faker } from '@faker-js/faker';

export const generateRandomCar = () => {
  const randomCar = {
    name: faker.vehicle.vehicle(),
    color: faker.color.rgb(),
  };
  return randomCar;
};
