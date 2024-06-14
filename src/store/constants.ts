export type StateStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export const stateStatus: { [key in StateStatus]: StateStatus } = {
  idle: 'idle',
  loading: 'loading',
  succeeded: 'succeeded',
  failed: 'failed',
};
