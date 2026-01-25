import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';

type Screen12EmotionalReliefProps = {
  onNext: () => void;
  onBack: () => void;
};

export function Screen12EmotionalRelief({ onNext, onBack }: Screen12EmotionalReliefProps) {
  return (
    <ScreenContainer onBack={onBack}>
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-3xl tracking-tight text-gray-900">
            Eating outside makes things harder.
          </h1>
          
          <p className="text-sm text-gray-500">
            Hidden sugars, portions, and combinations
            are easy to miss.
          </p>
        </div>

        <Button onClick={onNext}>Continue</Button>
      </div>
    </ScreenContainer>
  );
}
