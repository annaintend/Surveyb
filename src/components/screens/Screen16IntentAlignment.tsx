import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { AffirmationCard } from '../AffirmationCard';

type Screen16IntentAlignmentProps = {
  onNext: (data: { intentAlignment: string }) => void;
  onBack: () => void;
};

export function Screen16IntentAlignment({ onNext, onBack }: Screen16IntentAlignmentProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    'Feeling stable energy throughout the day',
    'Making calmer food choices',
    'Understanding what affects my body',
    'Reducing stress around food'
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ intentAlignment: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          What matters most to you at this stage?
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
