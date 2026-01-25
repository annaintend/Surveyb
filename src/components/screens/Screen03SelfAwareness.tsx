import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { OptionCard } from '../OptionCard';

type Screen03SelfAwarenessProps = {
  onNext: (data: { selfAwareness: string }) => void;
  onBack: () => void;
};

export function Screen03SelfAwareness({ onNext, onBack }: Screen03SelfAwarenessProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    'Almost always',
    'Sometimes',
    'Rarely',
    "I've never really paid attention"
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ selfAwareness: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          How often do you notice
          how you feel after eating?
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
