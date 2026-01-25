import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { OptionCard } from '../OptionCard';

type Screen08BodySignalsProps = {
  onNext: (data: { bodySignals: string[] }) => void;
  onBack: () => void;
};

export function Screen08BodySignals({ onNext, onBack }: Screen08BodySignalsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    'Sudden tiredness',
    'Cravings',
    'Difficulty focusing',
    'Mood changes',
    "I'm not sure"
  ];

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter(item => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      onNext({ bodySignals: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          Which signals do you notice
          most often?
        </h1>

        <div className="space-y-3">
          {options.map((option) => (
            <OptionCard
              key={option}
              text={option}
              selected={selected.includes(option)}
              onClick={() => toggleOption(option)}
              multiSelect
            />
          ))}
        </div>

        <Button onClick={handleContinue} disabled={selected.length === 0}>
          Continue
        </Button>
      </div>
    </ScreenContainer>
  );
}
