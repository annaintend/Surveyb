import { ChevronLeft } from 'lucide-react';

type ScreenContainerProps = {
  children: React.ReactNode;
  onBack?: () => void;
  showBack?: boolean;
};

export function ScreenContainer({ children, onBack, showBack = true }: ScreenContainerProps) {
  return (
    <div className="w-full px-6 py-8 relative">
      {showBack && onBack && (
        <button
          onClick={onBack}
          className="absolute top-8 left-6 p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      <div className="max-w-sm mx-auto">
        {children}
      </div>
    </div>
  );
}
