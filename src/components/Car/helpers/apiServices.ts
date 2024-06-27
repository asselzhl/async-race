import { agent } from '../../../store/carList/carListThunk';

type EngineStatus = 'started' | 'stopped' | 'drive';
interface RequestParams {
  carID: number;
  status: EngineStatus;
}

export const changeEngineStatus = (params: RequestParams) => {
  return agent.patch(`/engine?id=${params.carID}&status=${params.status}`);
};
