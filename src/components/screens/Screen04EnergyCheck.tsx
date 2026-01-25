import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { OptionCard } from '../OptionCard';

type Screen04EnergyCheckProps = {
  onNext: (data: { energyCheck: string }) => void;
  onBack: () => void;
};

export function Screen04EnergyCheck({ onNext, onBack }: Screen04EnergyCheckProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    'Stable and clear',
    'Heavy or sleepy',
    'Foggy',
    'It depends on the meal'
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ energyCheck: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          How does your energy usually feel
          after meals?
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
