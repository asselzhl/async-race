import { agent } from '../../../store/carList/carListThunk';

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
