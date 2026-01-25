import { useState } from 'react';

interface Screen4EnergyCheckProps {
  onNext: (answer: string) => void;
}

export function Screen4EnergyCheck({ onNext }: Screen4EnergyCheckProps) {
  const [selected, setSelected] = useState<string>('');

  const options = [
    'Stable and clear',
    'Heavy or sleepy',
    'Foggy',
    'It depends on the meal'
  ];

  const handleSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => onNext(option), 300);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-sm w-full space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-snug text-center">
          How does your energy usually feel
          after meals?
        </h1>

        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full py-4 px-6 rounded-2xl border-2 transition-all duration-200 text-left ${
                selected === option
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="text-gray-900">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
