import { useState } from 'react';

interface Screen17IdentityReflectionProps {
  onNext: (answer: string) => void;
}

export function Screen17IdentityReflection({ onNext }: Screen17IdentityReflectionProps) {
  const [selected, setSelected] = useState<string>('');

  const options = [
    'Something I enjoy but don't fully understand',
    'Something I overthink',
    'Something that affects my energy more than I expect',
    'Something I want to feel more relaxed about'
  ];

  const handleSelect = (option: string) => {
    setSelected(option);
    setTimeout(() => onNext(option), 300);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-sm w-full space-y-8">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-snug text-center">
          Right now, food feels like…
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
