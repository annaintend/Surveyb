import { useState } from 'react';

interface Screen7DailyPatternProps {
  onNext: (answer: string) => void;
}

export function Screen7DailyPattern({ onNext }: Screen7DailyPatternProps) {
  const [selected, setSelected] = useState<string>('');

  const options = [
    'Mostly stable',
    'Good in the morning, low later',
    'Comes in waves',
    'Hard to predict'
  ];

  const handleSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => onNext(option), 300);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-sm w-full space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-snug text-center">
          Does your energy feel predictable
          during the day?
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
