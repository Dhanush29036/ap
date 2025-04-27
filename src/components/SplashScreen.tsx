
import { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-women-light-purple to-white">
      <div className="animate-scale-in">
        <div className="w-24 h-24 rounded-full bg-women-purple flex items-center justify-center mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        Women Rides
      </h1>
      <p className="text-gray-600 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        Your Ride, Your Comfort
      </p>
    </div>
  );
};

export default SplashScreen;
