
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Check if user has seen onboarding before
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    
    if (hasSeenOnboarding) {
      navigate('/login');
    } else {
      localStorage.setItem('hasSeenOnboarding', 'true');
      navigate('/onboarding');
    }
  };

  return (
    <div className="h-screen">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
    </div>
  );
};

export default Index;
