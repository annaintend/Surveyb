import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import imgSugarnologooo1 from "@/assets/sugarno-black-logo.png";

interface Screen18Props {
  onNext: () => void;
}

export function Screen18({ onNext }: Screen18Props) {
  const [currentInsight, setCurrentInsight] = useState(0);

  const insights = [
    'Analyzing your responses',
    'Understanding your patterns',
    'Personalizing your insights'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => {
        if (prev === insights.length - 1) {
          clearInterval(interval);
          setTimeout(() => onNext(), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    const answers = JSON.parse(localStorage.getItem('answers') || '{}');
    const form = new FormData();
    for(const key in answers) {
      form.append(key, answers[key]);
    }

    fetch('https://hooks.zapier.com/hooks/catch/26016019/ulmeld4/', {
      method: 'POST',
      body: form,
    });


    window?.amplitude?.track?.("plan_generation_started");

    return () => clearInterval(interval);
  }, [onNext]);

  return (
    <div className="h-full bg-[#f5f5f5] flex flex-col overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col items-center justify-center px-8 pb-32 max-w-[450px] mx-auto"
      >
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="w-16 h-16 border-4 border-[#f14e58] border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>

          <p className="text-base text-gray-700 transition-all duration-500">
            {insights[currentInsight]}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
