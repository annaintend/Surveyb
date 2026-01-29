import { useState } from 'react';
import { motion } from 'motion/react';
import imgSugarnologooo1 from "@/assets/sugarno-black.png";

interface Screen17CProps {
  onNext: (data?: Record<string, any>) => void;
}

export function Screen17C({ onNext }: Screen17CProps) {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const ageRanges = [
    '18-29',
    '30-39',
    '40-49',
    '50+'
  ];

  const handleSelect = (age: string) => {
    setSelectedAge(age);
  };

  const handleContinue = () => {
    if (selectedAge) {
      onNext({ ageRange: selectedAge });
    }
  };

  return (
    <div className="h-full bg-[#f5f5f5] flex flex-col overflow-hidden">
      <div className="h-full flex flex-col max-w-[450px] mx-auto w-full relative">
        {/* Logo at top */}
        <div className="absolute top-0 left-0 right-0 h-[53.33px] backdrop-blur-[2px] z-10 flex items-end justify-center flex-shrink-0">
          <img 
            alt="sugar.no logo" 
            className="h-[38px] w-auto object-contain" 
            src={imgSugarnologooo1} 
          />
        </div>

        {/* Content area - scrollable */}
        <div className="flex-1 overflow-y-auto pt-[93px] pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="px-6"
          >
            {/* Header section */}
            <div className="text-center mb-12">
              <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] leading-[38px] text-black mb-4">
                How old are you?
              </h1>
              <p className="font-['Poppins:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#6b7280]">
                This helps us personalize your experience
              </p>
            </div>

            {/* Age options */}
            <div className="space-y-3">
              {ageRanges.map((age) => (
                <button
                  key={age}
                  onClick={() => handleSelect(age)}
                  className={`w-full h-[56px] px-5 rounded-[24px] bg-white font-['Poppins:Regular',sans-serif] font-normal text-[17px] text-[#111827] transition-all ${
                    selectedAge === age 
                      ? 'ring-2 ring-[#f14e58]' 
                      : 'hover:bg-[#fafafa]'
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-[#f5f5f5] pointer-events-none" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <div className="max-w-[450px] mx-auto pointer-events-auto">
            <button
              onClick={handleContinue}
              disabled={!selectedAge}
              className="w-full h-[56px] rounded-[32px] text-white font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold text-[18px] leading-[22px] uppercase transition-all bg-[#f14e58] hover:bg-[#e03d47] disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
