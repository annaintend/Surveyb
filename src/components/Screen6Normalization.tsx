interface Screen6NormalizationProps {
  onNext: () => void;
}

export function Screen6Normalization({ onNext }: Screen6NormalizationProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-sm w-full space-y-12 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl tracking-tight text-gray-900">
            That's more common than it seems.
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Food doesn't affect everyone the same way.
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
