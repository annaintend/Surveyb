import { useState } from 'react';
import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';
import { AffirmationCard } from '../AffirmationCard';

type Screen17IdentityReflectionProps = {
  onNext: (data: { identityReflection: string }) => void;
  onBack: () => void;
};

export function Screen17IdentityReflection({ onNext, onBack }: Screen17IdentityReflectionProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    "Something I enjoy but don't fully understand",
    'Something I overthink',
    'Something that affects my energy more than I expect',
    'Something I want to feel more relaxed about'
  ];

  const handleContinue = () => {
    if (selected) {
      onNext({ identityReflection: selected });
    }
  };

  return (
    <ScreenContainer onBack={onBack}>
      <div className="space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-tight">
          Right now, food feels like…
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
