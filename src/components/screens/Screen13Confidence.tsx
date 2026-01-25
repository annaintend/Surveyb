import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { OptionCard } from '../OptionCard';

type Screen13ConfidenceProps = {
  onNext: (data: { confidence: string }) => void;
  onBack: () => void;
};

export function Screen13Confidence({ onNext, onBack }: Screen13ConfidenceProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    'Usually',
    'Sometimes',
    'Rarely'
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ confidence: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          When eating out, how confident do you feel
          about how food will affect you?
        </h1>

        <div className="space-y-3">
          {options.map((option) => (
            <OptionCard
              key={option}
              text={option}
              selected={selected === option}
              onClick={() => setSelected(option)}
            />
          ))}
        </div>

        <Button onClick={handleContinue} disabled={!selected}>
          Continue
        </Button>
      </div>
    </ScreenContainer>
  );
}
