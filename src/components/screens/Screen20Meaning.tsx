import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';

type Screen20MeaningProps = {
  onNext: () => void;
  onBack: () => void;
};

export function Screen20Meaning({ onNext, onBack }: Screen20MeaningProps) {
  return (
    <ScreenContainer onBack={onBack}>
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-3xl tracking-tight text-gray-900">
            That doesn't mean something is wrong.
          </h1>
          
          <p className="text-sm text-gray-500">
            It means your body is giving signals
            you haven't been taught to read.
          </p>
        </div>

        <Button onClick={onNext}>Continue</Button>
      </div>
    </ScreenContainer>
  );
}
