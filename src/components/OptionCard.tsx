import { Check } from 'lucide-react';

type OptionCardProps = {
  text: string;
  selected: boolean;
  onClick: () => void;
  multiSelect?: boolean;
};

export function OptionCard({ text, selected, onClick, multiSelect = false }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-5 rounded-2xl text-left transition-all duration-200
        ${selected 
          ? 'bg-blue-50 border-2 border-blue-500 shadow-sm' 
          : 'bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-sm'
        }
      `}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`flex-1 ${selected ? 'text-gray-900' : 'text-gray-700'}`}>
          {text}
        </span>
        {multiSelect && selected && (
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <Check size={16} className="text-white" />
          </div>
        )}
      </div>
    </button>
  );
}
