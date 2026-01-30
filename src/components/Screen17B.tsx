import { useState } from 'react';
import { motion } from 'motion/react';
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";

interface Screen17BProps {
  onNext: (data?: Record<string, any>) => void;
}

export function Screen17B({ onNext }: Screen17BProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    onNext({ name, email });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValid = name.trim().length > 0 && isValidEmail(email.trim());

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
                Let's personalize
                <br />
                your experience
              </h1>
              <p className="font-['Poppins:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#6b7280]">
                We'll create your unique food profile
              </p>
            </div>

            {/* Form fields */}
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full h-[56px] px-5 rounded-[24px] border-0 bg-white font-['Poppins:Regular',sans-serif] font-normal text-[17px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-0 transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full h-[56px] px-5 rounded-[24px] border-0 bg-white font-['Poppins:Regular',sans-serif] font-normal text-[17px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:ring-0 transition-all"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-[#f5f5f5] pointer-events-none" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <div className="max-w-[450px] mx-auto pointer-events-auto">
            <button
              onClick={handleContinue}
              disabled={!isValid}
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