import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { OptionCard } from '../OptionCard';

type Screen07DailyPatternProps = {
  onNext: (data: { dailyPattern: string }) => void;
  onBack: () => void;
};

export function Screen07DailyPattern({ onNext, onBack }: Screen07DailyPatternProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    'Mostly stable',
    'Good in the morning, low later',
    'Comes in waves',
    'Hard to predict'
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ dailyPattern: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          Does your energy feel predictable
          during the day?
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
