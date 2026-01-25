import { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import { Screen01Permission } from './screens/Screen01Permission';
import { Screen02AwarenessHook } from './screens/Screen02AwarenessHook';
import { Screen03SelfAwareness } from './screens/Screen03SelfAwareness';
import { Screen04EnergyCheck } from './screens/Screen04EnergyCheck';
import { Screen05Reflection } from './screens/Screen05Reflection';
import { Screen06Normalization } from './screens/Screen06Normalization';
import { Screen07DailyPattern } from './screens/Screen07DailyPattern';
import { Screen08BodySignals } from './screens/Screen08BodySignals';
import { Screen09Reframing } from './screens/Screen09Reframing';
import { Screen10ControlContext } from './screens/Screen10ControlContext';
import { Screen11EatingOut } from './screens/Screen11EatingOut';
import { Screen12EmotionalRelief } from './screens/Screen12EmotionalRelief';
import { Screen13Confidence } from './screens/Screen13Confidence';
import { Screen14ReframeWillpower } from './screens/Screen14ReframeWillpower';
import { Screen15MessageResonance } from './screens/Screen15MessageResonance';
import { Screen16IntentAlignment } from './screens/Screen16IntentAlignment';
import { Screen17IdentityReflection } from './screens/Screen17IdentityReflection';
import { Screen18Analysis } from './screens/Screen18Analysis';
import { Screen19PersonalizedInsight } from './screens/Screen19PersonalizedInsight';
import { Screen20Meaning } from './screens/Screen20Meaning';
import { Screen21Solution } from './screens/Screen21Solution';
import { Screen22Paywall } from './screens/Screen22Paywall';

export type UserData = {
  selfAwareness?: string;
  energyCheck?: string;
  reflection?: string;
  dailyPattern?: string;
  bodySignals?: string[];
  controlContext?: string;
  eatingOut?: string;
  confidence?: string;
  messageResonance?: string;
  intentAlignment?: string;
  identityReflection?: string;
};

export function OnboardingFlow() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [userData, setUserData] = useState<UserData>({});

  const totalScreens = 22;

  const handleNext = (data?: Partial<UserData>) => {
    if (data) {
      setUserData({ ...userData, ...data });
    }
    setCurrentScreen(currentScreen + 1);
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <Screen01Permission onNext={handleNext} />;
      case 2:
        return <Screen02AwarenessHook onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Screen03SelfAwareness onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <Screen04EnergyCheck onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <Screen05Reflection onNext={handleNext} onBack={handleBack} />;
      case 6:
        return <Screen06Normalization onNext={handleNext} onBack={handleBack} />;
      case 7:
        return <Screen07DailyPattern onNext={handleNext} onBack={handleBack} />;
      case 8:
        return <Screen08BodySignals onNext={handleNext} onBack={handleBack} />;
      case 9:
        return <Screen09Reframing onNext={handleNext} onBack={handleBack} />;
      case 10:
        return <Screen10ControlContext onNext={handleNext} onBack={handleBack} />;
      case 11:
        return <Screen11EatingOut onNext={handleNext} onBack={handleBack} />;
      case 12:
        return <Screen12EmotionalRelief onNext={handleNext} onBack={handleBack} />;
      case 13:
        return <Screen13Confidence onNext={handleNext} onBack={handleBack} />;
      case 14:
        return <Screen14ReframeWillpower onNext={handleNext} onBack={handleBack} />;
      case 15:
        return <Screen15MessageResonance onNext={handleNext} onBack={handleBack} />;
      case 16:
        return <Screen16IntentAlignment onNext={handleNext} onBack={handleBack} />;
      case 17:
        return <Screen17IdentityReflection onNext={handleNext} onBack={handleBack} />;
      case 18:
        return <Screen18Analysis onNext={handleNext} onBack={handleBack} />;
      case 19:
        return <Screen19PersonalizedInsight onNext={handleNext} onBack={handleBack} />;
      case 20:
        return <Screen20Meaning onNext={handleNext} onBack={handleBack} />;
      case 21:
        return <Screen21Solution onNext={handleNext} onBack={handleBack} />;
      case 22:
        return <Screen22Paywall onBack={handleBack} />;
      default:
        return <Screen01Permission onNext={handleNext} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white">
      {currentScreen > 1 && <ProgressBar current={currentScreen} total={totalScreens} />}
      <div className="flex-1 flex items-center justify-center">
        {renderScreen()}
      </div>
    </div>
  );
}
