import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { AffirmationCard } from '../AffirmationCard';

type Screen15MessageResonanceProps = {
  onNext: (data: { messageResonance: string }) => void;
  onBack: () => void;
};

export function Screen15MessageResonance({ onNext, onBack }: Screen15MessageResonanceProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    'I want to eat freely and feel good afterward',
    'I want clarity instead of guessing',
    'I want to feel confident when eating out',
    'I want to understand what works for my body'
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ messageResonance: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          Which message feels closest to you right now?
        </h1>

        <div className="space-y-4">
          {options.map((option) => (
            <AffirmationCard
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
