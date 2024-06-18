export const getCarAnimationStyle = (
  isAnimating: boolean,
  animationDuration: number
) => {
  return {
    transform: isAnimating ? 'translateX(1200%)' : 'translateX(0)',
    transition: `${animationDuration}ms`,
  };
};
