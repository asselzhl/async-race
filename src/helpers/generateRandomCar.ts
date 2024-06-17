import { faker } from '@faker-js/faker';

const generateRandomCar = () => {
  const randomCar = {
    name: faker.vehicle.vehicle(),
    color: faker.color.rgb(),
  };
  return randomCar;
};

export default generateRandomCar;
