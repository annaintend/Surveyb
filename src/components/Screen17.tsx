import { motion } from 'motion/react';
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";

interface Screen17Props {
  onNext: (data?: Record<string, any>) => void;
  responses?: Record<string, any>;
}

interface Insight {
  emoji: string;
  lines: string[];
}

export function Screen17({ onNext, responses = {} }: Screen17Props) {
  // Generate dynamic insights based on user responses
  const generateInsights = (): Insight[] => {
    const insights: Insight[] = [];
    
    // Based on eating patterns
    if (responses?.eatingPattern === 'portions' || responses?.eatingPattern === 'snacking') {
      insights.push({
        emoji: '🍕',
        lines: [
          "You order pizza, thinking 'just 2",
          "slices'... then finish the whole box"
        ]
      });
    }
    
    // Based on energy or crashes
    if (responses?.energyLevel === 'crashes' || responses?.bodySignals?.includes('crashes')) {
      insights.push({
        emoji: '🍬',
        lines: [
          "You order something 'healthy'... then",
          "crash from hidden sugar"
        ]
      });
    }
    
    // Based on eating out concerns
    if (responses?.eatingOut === 'uncertain' || responses?.foodFeels === 'overthink') {
      insights.push({
        emoji: '📍',
        lines: [
          "You avoid new restaurants because",
          "you don't know what's safe"
        ]
      });
    }
    
    // Based on guilt or emotional patterns
    if (responses?.emotionalEating || responses?.foodFeels === 'want-relaxed') {
      insights.push({
        emoji: '😔',
        lines: [
          "You finish eating, feel heavy and",
          "guilty... but don't know why or how to",
          "change it"
        ]
      });
    }
    
    // Based on confusion about body signals
    if (responses?.bodySignals?.includes('confused') || responses?.whatMatters === 'understanding') {
      insights.push({
        emoji: '🤷',
        lines: [
          "You eat something and feel off... but",
          "can't figure out why"
        ]
      });
    }
    
    // Default insights if we don't have enough data
    if (insights.length < 3) {
      const defaultInsights: Insight[] = [
        {
          emoji: '🍕',
          lines: [
            "You order pizza, thinking 'just 2",
            "slices'... then finish the whole box"
          ]
        },
        {
          emoji: '🍬',
          lines: [
            "You order something 'healthy'... then",
            "crash from hidden sugar"
          ]
        },
        {
          emoji: '📍',
          lines: [
            "You avoid new restaurants because",
            "you don't know what's safe"
          ]
        },
        {
          emoji: '😔',
          lines: [
            "You finish eating, feel heavy and",
            "guilty... but don't know why or how to",
            "change it"
          ]
        },
        {
          emoji: '🤷',
          lines: [
            "You eat something and feel off... but",
            "can't figure out why"
          ]
        }
      ];
      
      // Add missing insights
      while (insights.length < 5) {
        const nextDefault = defaultInsights.find(
          def => !insights.some(ins => ins.emoji === def.emoji)
        );
        if (nextDefault) {
          insights.push(nextDefault);
        } else {
          break;
        }
      }
    }
    
    return insights.slice(0, 5);
  };

  const insights = generateInsights();

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
              <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] leading-[33px] uppercase text-black mb-3">
                You're eating blind.
                <br />
                Every day
              </h1>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-[18px] text-[#f14e58]">
                Most overeating isn't driven by hunger.
                <br />
                It happens because you don't see it coming
              </p>
            </div>

            {/* Insights list */}
            <div className="space-y-3">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[24px] border border-[#f3f4f6] p-4 flex items-start gap-3"
                >
                  <div className="text-[24px] leading-[32px] shrink-0 pt-1">
                    {insight.emoji}
                  </div>
                  <p className="flex-1 font-['Poppins:Regular',sans-serif] font-normal text-[18px] leading-[28px] text-[#374151] pt-1">
                    {insight.lines.join(' ')}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-[#f5f5f5] pointer-events-none" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
          <div className="max-w-[450px] mx-auto pointer-events-auto">
            <button
              onClick={() => onNext()}
              className="w-full h-[56px] rounded-[32px] text-white font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold text-[18px] leading-[22px] uppercase transition-all bg-[#f14e58] hover:bg-[#e03d47]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              I'm ready to change →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}