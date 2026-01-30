import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";

interface Screen16Props {
  onNext: () => void;
}

export function Screen16({ onNext }: Screen16Props) {
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);

  const insights = [
    'Similar lifestyles → similar sugar swings',
    'Energy crashes often come from combinations',
    'Awareness changes choices'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsightIndex((prev) => (prev + 1) % insights.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Auto-advance after 5 seconds
    const timeout = setTimeout(() => {
      onNext();
    }, 3500);

    return () => clearTimeout(timeout);
  }, [onNext]);

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

        {/* Content area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center"
        >
          {/* Main headline */}
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] leading-[32px] tracking-[0.4px] text-black mb-3">
            Connecting your answers with real glucose patterns
          </h1>

          {/* Subheadline */}
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[22px] tracking-[-0.2px] text-gray-600 mb-12">
            Based on people with similar habits and goals.
          </p>

          {/* Loading indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#f14e58] animate-pulse" style={{ animationDelay: '0ms', animationDuration: '1000ms' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#f14e58] animate-pulse" style={{ animationDelay: '200ms', animationDuration: '1000ms' }}></div>
              <div className="w-2 h-2 rounded-full bg-[#f14e58] animate-pulse" style={{ animationDelay: '400ms', animationDuration: '1000ms' }}></div>
            </div>
          </div>

          {/* Rotating insights */}
          <div className="h-[60px] flex items-center justify-center">
            <motion.p
              key={currentInsightIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="font-['Inter:Regular',sans-serif] font-normal text-[17px] leading-[24px] tracking-[-0.2px] text-gray-700"
            >
              {insights[currentInsightIndex]}
            </motion.p>
          </div>
        </motion.div>

        {/* Button */}
        <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-[#f5f5f5] pointer-events-none" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <div className="max-w-[450px] mx-auto pointer-events-auto">
            <button
              onClick={onNext}
              className="w-full h-[56px] rounded-[32px] text-white font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold text-[18px] leading-[22px] uppercase transition-all bg-[#f14e58] hover:bg-[#e03d47]"
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