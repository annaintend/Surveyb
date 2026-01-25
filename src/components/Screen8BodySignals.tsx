import { useState } from 'react';

interface Screen8BodySignalsProps {
  onNext: (answer: string[]) => void;
}

export function Screen8BodySignals({ onNext }: Screen8BodySignalsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    'Sudden tiredness',
    'Cravings',
    'Difficulty focusing',
    'Mood changes',
    'I'm not sure'
  ];

  const toggleOption = (option: string) => {
    setSelected(prev => 
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      onNext(selected);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-6 py-12">
      <div className="max-w-sm w-full space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-snug text-center">
          Which signals do you notice
          most often?
        </h1>

        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className={`w-full py-4 px-6 rounded-2xl border-2 transition-all duration-200 text-left ${
                selected.includes(option)
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="text-gray-900">{option}</span>
            </button>
          ))}
        </div>
      </div>

      {selected.length > 0 && (
        <button
          onClick={handleContinue}
          className="w-full max-w-sm py-4 px-6 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors duration-200"
        >
          Continue
        </button>
      )}
    </div>
  );
}
