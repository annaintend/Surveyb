import { useState } from 'react';

interface Screen15MessageResonanceProps {
  onNext: (answer: string) => void;
}

export function Screen15MessageResonance({ onNext }: Screen15MessageResonanceProps) {
  const [selected, setSelected] = useState<string>('');

  const options = [
    'I want to eat freely and feel good afterward',
    'I want clarity instead of guessing',
    'I want to feel confident when eating out',
    'I want to understand what works for my body'
  ];

  const handleSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => onNext(option), 300);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-sm w-full space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-snug text-center">
          Which message feels closest to you right now?
        </h1>

        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full py-5 px-6 rounded-2xl border-2 transition-all duration-200 text-left shadow-sm hover:shadow-md ${
                selected === option
                  ? 'border-gray-900 bg-gray-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <span className="text-gray-900 leading-relaxed">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
