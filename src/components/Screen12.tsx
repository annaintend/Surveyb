import { motion } from 'motion/react';
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";
import img51 from "figma:asset/154c3c7b4c42e50a3621dac6b5ae63e0d1f9bfda.png";

interface Screen12Props {
  onNext: () => void;
}

export function Screen12({ onNext }: Screen12Props) {
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
          className="flex-1 flex flex-col items-center justify-center px-6 pt-[32px] pb-[200px] min-h-0"
        >
          {/* Eating outside infographic - truly scalable */}
          <div className="w-full max-w-[min(450px,85vw)] flex-shrink mb-8">
            <img 
              alt="Eating outside infographic showing hidden sugars in coffee and croissant" 
              className="w-full h-auto object-contain max-h-[55vh]" 
              src={img51} 
            />
          </div>
        </motion.div>

        {/* Fixed text + button area */}
        <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 bg-[#f5f5f5] flex-shrink-0 pointer-events-none" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <div className="max-w-[450px] mx-auto pointer-events-auto">
            {/* Text content */}
            <div className="text-center mb-6">
              <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[clamp(24px,7vw,32px)] leading-tight text-black uppercase mb-4">
                Eating outside makes things even harder
              </h1>
              
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[clamp(13px,4vw,15px)] leading-tight text-[rgba(0,0,0,0.7)]">
                Hidden sugars, portions, and combinations are easy to miss.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={onNext}
              className="w-full h-[56px] rounded-[32px] bg-[#f14e58] text-white font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold text-[18px] leading-[22px] uppercase transition-all hover:bg-[#e03d47]"
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
