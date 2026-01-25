import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';

type Screen09ReframingProps = {
  onNext: () => void;
  onBack: () => void;
};

export function Screen09Reframing({ onNext, onBack }: Screen09ReframingProps) {
  return (
    <ScreenContainer onBack={onBack}>
      <div className="text-center space-y-12">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          Many of these signals
          are linked to blood sugar.
        </h1>

        <Button onClick={onNext}>Continue</Button>
      </div>
    </ScreenContainer>
  );
}
