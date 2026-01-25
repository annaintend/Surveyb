import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';

type Screen02AwarenessHookProps = {
  onNext: () => void;
  onBack: () => void;
};

export function Screen02AwarenessHook({ onNext, onBack }: Screen02AwarenessHookProps) {
  return (
    <ScreenContainer onBack={onBack}>
      <div className="text-center space-y-12">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          Most people eat without really knowing
          how food affects their body.
        </h1>

        <Button onClick={onNext}>Continue</Button>
      </div>
    </ScreenContainer>
  );
}
