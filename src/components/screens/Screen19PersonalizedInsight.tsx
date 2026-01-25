import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';

type Screen19PersonalizedInsightProps = {
  onNext: () => void;
  onBack: () => void;
};

export function Screen19PersonalizedInsight({ onNext, onBack }: Screen19PersonalizedInsightProps) {
  return (
    <ScreenContainer onBack={onBack}>
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-3xl tracking-tight text-gray-900">
            Based on what you shared —
          </h1>
          
          <p className="text-base text-gray-700 leading-relaxed">
            Your glucose responses are likely
            less predictable than you expect.
          </p>
        </div>

        <Button onClick={onNext}>Continue</Button>
      </div>
    </ScreenContainer>
  );
}
