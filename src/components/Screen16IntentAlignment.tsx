import { useState } from 'react';

interface Screen16IntentAlignmentProps {
  onNext: (answer: string) => void;
}

export function Screen16IntentAlignment({ onNext }: Screen16IntentAlignmentProps) {
  const [selected, setSelected] = useState<string>('');

  const options = [
    'Feeling stable energy throughout the day',
    'Making calmer food choices',
    'Understanding what affects my body',
    'Reducing stress around food'
  ];

  const handleSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => onNext(option), 300);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-sm w-full space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-snug text-center">
          What matters most to you at this stage?
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
