import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { OptionCard } from '../OptionCard';

type Screen10ControlContextProps = {
  onNext: (data: { controlContext: string }) => void;
  onBack: () => void;
};

export function Screen10ControlContext({ onNext, onBack }: Screen10ControlContextProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    'I mostly cook myself',
    'A mix of home and outside food',
    "Mostly food I don't cook"
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ controlContext: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          How much control do you usually have
          over what you eat?
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
