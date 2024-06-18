import { agent } from '../../../store/car/carThunk';

export const makePatchRequest = (ID: number, status: string) => {
  return agent.patch(`/engine?id=${ID}&status=${status}`);
};

// eslint-disable-next-line
export const driveCar = async (ID: number) => {
  try {
    const response = await makePatchRequest(ID, 'drive');
    return response;
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
};
