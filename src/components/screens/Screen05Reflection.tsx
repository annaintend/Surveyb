import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { OptionCard } from '../OptionCard';

type Screen05ReflectionProps = {
  onNext: (data: { reflection: string }) => void;
  onBack: () => void;
};

export function Screen05Reflection({ onNext, onBack }: Screen05ReflectionProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    'Yes, often',
    'Sometimes',
    'Rarely',
    'Not sure'
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ reflection: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          Have you ever eaten "well"
          but still felt off?
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
