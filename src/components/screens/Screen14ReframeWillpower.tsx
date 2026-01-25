import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';

type Screen14ReframeWillpowerProps = {
  onNext: () => void;
  onBack: () => void;
};

export function Screen14ReframeWillpower({ onNext, onBack }: Screen14ReframeWillpowerProps) {
  return (
    <ScreenContainer onBack={onBack}>
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-3xl tracking-tight text-gray-900">
            This isn't about willpower.
          </h1>
          
          <p className="text-sm text-gray-500">
            It's about not having visibility.
          </p>
        </div>

        <Button onClick={onNext}>Continue</Button>
      </div>
    </ScreenContainer>
  );
}
