import { agent } from '../../../store/car/carThunk';

type EngineStatus = 'started' | 'stopped' | 'drive';
interface RequestParams {
  carID: number;
  status: EngineStatus;
}
// eslint-disable-next-line
export const changeEngineStatus = (params: RequestParams) => {
  try {
    return agent.patch(`/engine?id=${params.carID}&status=${params.status}`);
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
};
// eslint-disable-next-line
export const driveCar = async (ID: number) => {
  try {
    const response = await changeEngineStatus({ carID: ID, status: 'drive' });
    return response;
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
};
