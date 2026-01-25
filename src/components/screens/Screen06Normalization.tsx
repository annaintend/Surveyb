import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';

type Screen06NormalizationProps = {
  onNext: () => void;
  onBack: () => void;
};

export function Screen06Normalization({ onNext, onBack }: Screen06NormalizationProps) {
  return (
    <ScreenContainer onBack={onBack}>
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-3xl tracking-tight text-gray-900">
            That's more common than it seems.
          </h1>
          
          <p className="text-sm text-gray-500">
            Food doesn't affect everyone the same way.
          </p>
        </div>

        <Button onClick={onNext}>Continue</Button>
      </div>
    </ScreenContainer>
  );
}
