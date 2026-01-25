type AffirmationCardProps = {
  text: string;
  selected: boolean;
  onClick: () => void;
};

export function AffirmationCard({ text, selected, onClick }: AffirmationCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-6 rounded-3xl text-left transition-all duration-300
        ${selected 
          ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-400 shadow-lg scale-[1.02]' 
          : 'bg-white border-2 border-gray-100 hover:border-gray-200 hover:shadow-md shadow-sm'
        }
      `}
    >
      <p className={`leading-relaxed ${selected ? 'text-gray-900' : 'text-gray-700'}`}>
        {text}
      </p>
    </button>
  );
}
