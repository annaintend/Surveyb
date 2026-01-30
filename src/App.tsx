import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Screen1 } from './components/Screen1';
import { Screen2 } from './components/Screen2';
import { Screen3 } from './components/Screen3';
import { Screen4 } from './components/Screen4';
import { Screen5 } from './components/Screen5';
import { Screen6 } from './components/Screen6';
import { Screen7 } from './components/Screen7';
import { Screen8 } from './components/Screen8';
import { Screen9 } from './components/Screen9';
import { Screen10 } from './components/Screen10';
import { Screen11 } from './components/Screen11';
import { Screen12 } from './components/Screen12';
import { Screen13 } from './components/Screen13';
import { Screen14 } from './components/Screen14';
import { Screen15 } from './components/Screen15';
import { Screen15B } from './components/Screen15B';
import { Screen15C } from './components/Screen15C';
import { Screen16 } from './components/Screen16';
import { Screen17 } from './components/Screen17';
import { Screen17B } from './components/Screen17B';
import { Screen17C } from './components/Screen17C';
import { Screen18 } from './components/Screen18';
import { Screen26 } from './components/Screen26';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [responses, setResponses] = useState<Record<string, any>>({});

  const totalScreens = 23;
  const progress = (currentScreen / totalScreens) * 100;

  // Set theme color for mobile browser chrome
  useEffect(() => {
    // Update theme-color meta tag
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', '#f5f5f5');
  }, []);

  const handleNext = (data?: Record<string, any>) => {
    if (data) {
      setResponses(prev => ({ ...prev, ...data }));
    }
    setCurrentScreen(prev => Math.min(prev + 1, totalScreens));
  };

  const handleBack = () => {
    setCurrentScreen(prev => Math.max(prev - 1, 1));
  };

  const screens = [
    <Screen1 onNext={handleNext} />,
    <Screen2 onNext={handleNext} />,
    <Screen3 onNext={handleNext} />,
    <Screen4 onNext={handleNext} />,
    <Screen5 onNext={handleNext} />,
    <Screen6 onNext={handleNext} />,
    <Screen7 onNext={handleNext} />,
    <Screen8 onNext={handleNext} />,
    <Screen9 onNext={handleNext} />,
    <Screen10 onNext={handleNext} />,
    <Screen11 onNext={handleNext} />,
    <Screen12 onNext={handleNext} />,
    <Screen13 onNext={handleNext} />,
    <Screen14 onNext={handleNext} />,
    <Screen15 onNext={handleNext} />,
    <Screen15B onNext={handleNext} />,
    <Screen15C onNext={handleNext} />,
    <Screen16 onNext={handleNext} />,
    <Screen17 onNext={handleNext} responses={responses} />,
    <Screen17B onNext={handleNext} responses={responses} />,
    <Screen17C onNext={handleNext} responses={responses} />,
    <Screen18 onNext={handleNext} />,
    <Screen26 onNext={handleNext} />,
  ];

  return (
    <div className="h-screen overflow-hidden bg-[#f5f5f5] relative">
      {/* Persistent background layer to prevent color flashing during animations */}
      <div className="fixed inset-0 bg-[#f5f5f5] z-0" />
      
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <motion.div
          className="h-full bg-[#f14e58]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Screens - no animation on container */}
      <div className="h-full pt-1 bg-[#f5f5f5] relative z-10">
        <AnimatePresence mode="wait">
          <div key={currentScreen} className="h-full">
            {screens[currentScreen - 1]}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}