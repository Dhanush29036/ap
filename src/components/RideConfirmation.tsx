
import { useState, useEffect } from 'react';
import { Star, Phone, MessageSquare, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface RideConfirmationProps {
  rideType: string;
  onComplete: () => void;
}

const RideConfirmation = ({ rideType, onComplete }: RideConfirmationProps) => {
  const [step, setStep] = useState('searching'); // searching, found, arriving, started
  const { toast } = useToast();

  useEffect(() => {
    // Simulate finding a driver
    const searchingTimer = setTimeout(() => {
      setStep('found');
      toast({
        title: "Driver found!",
        description: "Priya will arrive in 3 minutes",
      });
    }, 3000);

    return () => clearTimeout(searchingTimer);
  }, [toast]);

  const handleStartRide = () => {
    setStep('started');
    toast({
      title: "Ride started",
      description: "You'll reach your destination in 12 minutes",
    });

    // Simulate ride completion
    setTimeout(() => {
      onComplete();
    }, 5000);
  };

  return (
    <div className="bg-white rounded-t-3xl shadow-lg p-4 animate-slide-up">
      {step === 'searching' && (
        <div className="text-center py-6">
          <div className="w-16 h-16 border-4 border-women-purple border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold mb-1">Finding your driver</h3>
          <p className="text-gray-500">Looking for nearby drivers...</p>
        </div>
      )}

      {(step === 'found' || step === 'started') && (
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
              <div className="w-full h-full bg-gray-300"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-semibold">Priya S</h3>
                <div className="flex items-center ml-2 text-xs bg-green-100 text-green-700 px-1 py-0.5 rounded">
                  <Star size={10} className="mr-0.5" fill="currentColor" />
                  <span>4.8</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                {rideType === 'bike' ? 'Honda Activa • KA 01 AB 1234' : 
                 rideType === 'auto' ? 'Auto • KA 01 AB 5678' : 
                 'Maruti Suzuki Dzire • KA 01 AB 9012'}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button size="icon" variant="outline" className="rounded-full w-10 h-10">
                <Phone size={16} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full w-10 h-10">
                <MessageSquare size={16} />
              </Button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-women-light-purple flex items-center justify-center mr-2">
                  <Shield size={14} className="text-women-purple" />
                </div>
                <span className="font-medium">Safety Features</span>
              </div>
              <Button variant="link" className="text-women-purple p-0 h-auto">
                View
              </Button>
            </div>
            <div className="text-xs text-gray-600">
              Share trip status, emergency contacts, and SOS button available during ride
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-gray-600">Estimated fare</span>
              <span className="font-semibold">
                {rideType === 'bike' ? '₹40' : rideType === 'auto' ? '₹80' : '₹120'}
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-4">
              <span>Cash payment</span>
              <span>Includes taxes</span>
            </div>

            {step === 'found' ? (
              <Button 
                className="w-full bg-women-purple hover:bg-women-purple/90"
                onClick={handleStartRide}
              >
                Start Ride
              </Button>
            ) : (
              <div className="bg-green-100 text-green-800 font-medium p-3 rounded-lg text-center">
                Ride in Progress • 12 mins remaining
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RideConfirmation;
