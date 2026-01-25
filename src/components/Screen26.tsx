import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useState } from 'react';
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";

interface Screen26Props {
  onNext: () => void;
}

export function Screen26({ onNext }: Screen26Props) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('annual');

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
            <div className="text-center mb-8">
              <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] leading-[38px] text-black mb-2">
                Unlock Premium with
                <br />
                a 7-day free trial
              </h1>
            </div>

            {/* Pricing options */}
            <div className="space-y-3 mb-4">
              {/* Monthly plan */}
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`w-full p-4 rounded-[24px] bg-white text-left transition-all ${
                  selectedPlan === 'monthly' 
                    ? 'ring-2 ring-[#f14e58]' 
                    : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-['Poppins:SemiBold',sans-serif] font-semibold text-[15px] text-black mb-1">
                      Monthly
                    </div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-['Poppins:Bold',sans-serif] font-bold text-[24px] text-black">$15</span>
                      <span className="font-['Poppins:Regular',sans-serif] font-normal text-[14px] text-[#6b7280]">/mo</span>
                    </div>
                    <div className="font-['Poppins:Regular',sans-serif] font-normal text-[12px] text-[#9ca3af]">
                      Billed as one payment of $15 per month
                    </div>
                  </div>
                </div>
              </button>

              {/* Annual plan */}
              <button
                onClick={() => setSelectedPlan('annual')}
                className={`w-full p-4 rounded-[24px] bg-white text-left transition-all relative ${
                  selectedPlan === 'annual' 
                    ? 'ring-2 ring-[#f14e58]' 
                    : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-['Poppins:SemiBold',sans-serif] font-semibold text-[15px] text-black">
                        Annual
                      </span>
                      <span className="px-2 py-0.5 bg-[#fee2e2] text-[#f14e58] font-['Poppins:Medium',sans-serif] font-medium text-[11px] rounded-full">
                        Popular
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-['Poppins:Bold',sans-serif] font-bold text-[24px] text-black line-through text-[#9ca3af]">$0</span>
                      <span className="font-['Poppins:Regular',sans-serif] font-normal text-[14px] text-[#6b7280]">/mo</span>
                    </div>
                    <div className="font-['Poppins:Regular',sans-serif] font-normal text-[12px] text-[#9ca3af]">
                      Then $94 per year after 7-day free trial
                    </div>
                  </div>
                  {selectedPlan === 'annual' && (
                    <div className="ml-2">
                      <div className="w-5 h-5 rounded-full bg-[#f14e58] flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* Cancel anytime text */}
            <div className="text-center mb-8">
              <p className="font-['Poppins:Regular',sans-serif] font-normal text-[13px] text-[#9ca3af]">
                Exit with control. Cancel anytime
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#f14e58]" />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] font-normal text-[15px] text-[#374151]">
                  AI meal scanner
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#f14e58]" />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] font-normal text-[15px] text-[#374151]">
                  Overeating alerts
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#f14e58]" />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] font-normal text-[15px] text-[#374151]">
                  Eating patterns summary
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#f14e58]" />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] font-normal text-[15px] text-[#374151]">
                  Instant energy & sugar insights
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#fee2e2] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#f14e58]" />
                </div>
                <p className="font-['Poppins:Regular',sans-serif] font-normal text-[15px] text-[#374151]">
                  1000+ checked restaurants
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-[#f5f5f5] pointer-events-none" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <div className="max-w-[450px] mx-auto pointer-events-auto">
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/14AcN64lJ5DWdpdg1L93y04'}
              className="w-full h-[56px] rounded-[32px] text-white font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold text-[18px] leading-[22px] uppercase transition-all bg-[#f14e58] hover:bg-[#e03d47]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Start a 7-day free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}