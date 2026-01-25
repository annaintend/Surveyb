interface Screen9ReframingProps {
  onNext: () => void;
}

export function Screen9Reframing({ onNext }: Screen9ReframingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-sm w-full space-y-12 text-center">
        <h1 className="text-3xl tracking-tight text-gray-900 leading-snug">
          Many of these signals
          are linked to blood sugar.
        </h1>

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
