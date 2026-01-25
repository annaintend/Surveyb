import { motion } from 'motion/react';
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";
import imgTrustedBy from "figma:asset/558fc4b746f89a80bf0f0675324affb06a3b1406.png";

interface Screen2Props {
  onNext: () => void;
}

export function Screen2({ onNext }: Screen2Props) {
  return (
    <div className="h-full bg-[#f5f5f5] flex flex-col overflow-hidden">
      <div className="h-full flex flex-col w-full relative">
        {/* Logo at top */}
        <div className="absolute top-0 left-0 right-0 h-[53.33px] backdrop-blur-[2px] z-10 flex items-end justify-center flex-shrink-0">
          <img 
            alt="sugar.no logo" 
            className="h-[38px] w-auto object-contain" 
            src={imgSugarnologooo1} 
          />
        </div>

        {/* Content area - scrollable */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center px-2 md:px-6 pt-[80px] pb-[120px] min-h-0 overflow-y-auto"
        >
          {/* Trusted by image */}
          <div className="w-full flex-shrink mb-8">
            <img 
              alt="Trusted by 12K users - user testimonials showing 5.0 star ratings with quotes about understanding food effects, honest reflection, seeing patterns, and no judgment" 
              className="w-full h-auto object-contain max-h-[85vh]" 
              src={imgTrustedBy} 
            />
          </div>
        </motion.div>

        {/* Button */}
        <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-[#f5f5f5] pointer-events-none" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <div className="max-w-[450px] mx-auto pointer-events-auto">
            <button
              onClick={onNext}
              className="w-full h-[56px] rounded-[32px] bg-[#f14e58] text-white font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold text-[18px] leading-[22px] uppercase transition-all hover:bg-[#e03d47]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Let's go →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}