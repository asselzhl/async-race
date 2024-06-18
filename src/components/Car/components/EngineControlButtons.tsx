import { Button, ButtonGroup } from '@mui/material';

interface EngineControlButtonsProps {
  handleStartEngine: () => void;
  handleStopEngine: () => void;
  isAnimating: boolean;
}

export function EngineControlButtons({
  handleStartEngine,
  handleStopEngine,
  isAnimating,
}: EngineControlButtonsProps) {
  return (
    <ButtonGroup variant="contained" size="small" orientation="vertical">
      <Button onClick={handleStartEngine} disabled={isAnimating}>
        A
      </Button>
      <Button onClick={handleStopEngine} disabled={!isAnimating}>
        B
      </Button>
    </ButtonGroup>
  );
}
