
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface OnboardingSlideProps {
  title: string;
  description: string;
  icon: ReactNode;
  isLast?: boolean;
  onNext: () => void;
  onSkip: () => void;
}

const OnboardingSlide = ({
  title,
  description,
  icon,
  isLast = false,
  onNext,
  onSkip,
}: OnboardingSlideProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 animate-fade-in">
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="bg-women-light-purple p-8 rounded-full mb-8">{icon}</div>
      </div>
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-full space-y-4">
        <Button
          className="w-full bg-women-purple hover:bg-women-purple/90 text-white"
          onClick={onNext}
        >
          {isLast ? 'Get Started' : 'Next'}
        </Button>
        {!isLast && (
          <Button
            variant="ghost"
            className="w-full text-gray-500"
            onClick={onSkip}
          >
            Skip
          </Button>
        )}
      </div>
    </div>
  );
};

export default OnboardingSlide;
