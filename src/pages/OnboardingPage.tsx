
import { useState } from 'react';
import { Shield, MapPin, Clock } from 'lucide-react';
import OnboardingSlide from '@/components/OnboardingSlide';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: 'Safety First',
      description: 'All our rides are driven by verified women drivers for your safety and comfort.',
      icon: <Shield size={64} className="text-women-purple" />,
    },
    {
      title: 'Track in Real-time',
      description: 'Know exactly where your driver is and share your trip status with loved ones.',
      icon: <MapPin size={64} className="text-women-purple" />,
    },
    {
      title: 'Quick & Reliable',
      description: 'Get to your destination on time with our efficient routing system.',
      icon: <Clock size={64} className="text-women-purple" />,
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-stretch">
      <div className="w-full">
        <OnboardingSlide
          title={slides[currentSlide].title}
          description={slides[currentSlide].description}
          icon={slides[currentSlide].icon}
          isLast={currentSlide === slides.length - 1}
          onNext={handleNext}
          onSkip={handleSkip}
        />
      </div>
    </div>
  );
};

export default OnboardingPage;
