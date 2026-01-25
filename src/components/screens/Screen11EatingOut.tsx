import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { OptionCard } from '../OptionCard';

type Screen11EatingOutProps = {
  onNext: (data: { eatingOut: string }) => void;
  onBack: () => void;
};

export function Screen11EatingOut({ onNext, onBack }: Screen11EatingOutProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    'A few times a week',
    'Most days',
    'Almost every day'
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ eatingOut: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          How often do you eat outside your home?
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
