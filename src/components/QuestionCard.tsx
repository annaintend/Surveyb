interface QuestionCardProps {
  emoji: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
  type?: 'radio' | 'checkbox';
}

export function QuestionCard({ emoji, text, isSelected, onClick, type = 'radio' }: QuestionCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white h-[70px] relative rounded-[24px] w-full transition-all hover:shadow-sm"
    >
      <div className="absolute flex gap-[14px] h-[44px] items-center left-[19px] top-[13px] right-[19px]">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] text-[16px] text-black text-left tracking-[-0.2px]">
            {text}
          </p>
        </div>

        {/* Radio/Checkbox */}
        <div 
          className={`relative rounded-full shrink-0 size-[22px] transition-all flex items-center justify-center ${ 
            isSelected 
              ? 'bg-[#f14e58]' 
              : 'bg-[#f2f2f2]'
          }`}
        >
          {isSelected && (
            <svg 
              className="size-[14px]" 
              viewBox="0 0 14 14" 
              fill="none"
            >
              <path 
                d="M11.6667 3.5L5.25 9.91667L2.33333 7" 
                stroke="white" 
                strokeWidth="1.75" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}