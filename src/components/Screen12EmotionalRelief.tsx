interface Screen12EmotionalReliefProps {
  onNext: () => void;
}

export function Screen12EmotionalRelief({ onNext }: Screen12EmotionalReliefProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-sm w-full space-y-12 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl tracking-tight text-gray-900">
            Eating outside makes things harder.
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Hidden sugars, portions, and combinations
            are easy to miss.
          </p>
        </div>

        <button
          onClick={onNext}
          className="w-full py-4 px-6 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
