import { useState, useEffect } from 'react';
import { ScreenContainer } from '../ScreenContainer';

type Screen18AnalysisProps = {
  onNext: () => void;
  onBack: () => void;
};

const insights = [
  'Similar lifestyles → similar sugar swings',
  'Energy crashes often come from combinations',
  'Awareness changes choices'
];

export function Screen18Analysis({ onNext, onBack }: Screen18AnalysisProps) {
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);

  useEffect(() => {
    const insightInterval = setInterval(() => {
      setCurrentInsightIndex((prev) => (prev + 1) % insights.length);
    }, 2000);

    const timer = setTimeout(() => {
      onNext();
    }, 4500);

    return () => {
      clearInterval(insightInterval);
      clearTimeout(timer);
    };
  }, [onNext]);

  return (
    <ScreenContainer onBack={onBack}>
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-3xl tracking-tight text-gray-900">
            Connecting your answers
            with real glucose patterns
          </h1>
          
          <p className="text-sm text-gray-500">
            Based on people with similar habits and goals.
          </p>
        </div>

        <div className="py-8">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
        </div>

        <div className="min-h-[60px] flex items-center justify-center">
          <p className="text-sm text-gray-600 italic transition-opacity duration-500">
            {insights[currentInsightIndex]}
          </p>
        </div>
      </div>
    </ScreenContainer>
  );
}
