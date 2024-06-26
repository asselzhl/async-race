type DrivingStatus = 'initial' | 'driving' | 'finished';

interface CarAnimationProps {
  carStatus: DrivingStatus;
  animationDuration: number;
}

const resetAnimation = {
  animation: 'none',
};

const getRunningAnimation = (animationDuration: number) => ({
  animationDuration: `${animationDuration}s`,
  animationPlayState: 'running',
  animationFillMode: 'forwards',
});

export const getCarAnimation = ({
  carStatus,
  animationDuration,
}: CarAnimationProps) => {
  const runningAnimation = getRunningAnimation(animationDuration);
  switch (carStatus) {
    case 'initial':
      return resetAnimation;
    case 'driving':
      return runningAnimation;
    case 'finished':
      return { ...runningAnimation, animationPlayState: 'paused' };
    default:
      return {};
  }
};
