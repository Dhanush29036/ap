
import { useState } from 'react';
import { Bike, Car, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface RideOptionsProps {
  onSelectRide: (type: string) => void;
}

const RideOptions = ({ onSelectRide }: RideOptionsProps) => {
  const [selectedRide, setSelectedRide] = useState('bike');
  const { toast } = useToast();

  const handleRideSelect = (type: string) => {
    setSelectedRide(type);
  };

  const handleBookRide = () => {
    onSelectRide(selectedRide);
    toast({
      title: "Finding your driver",
      description: `We're looking for a ${selectedRide} nearby.`,
    });
  };

  return (
    <div className="bg-white rounded-t-3xl shadow-lg p-4 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Select Ride</h2>
        <span className="text-xs text-gray-500">5 drivers nearby</span>
      </div>

      <div className="space-y-3">
        <div 
          className={`ride-option ${selectedRide === 'bike' ? 'selected' : ''}`}
          onClick={() => handleRideSelect('bike')}
        >
          <div className="ride-option-icon bg-women-light-purple">
            <Bike className="text-women-purple" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">Bike</h3>
            <p className="text-xs text-gray-500">Fastest & budget friendly</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">₹40</p>
            <p className="text-xs text-gray-500">5 mins</p>
          </div>
        </div>

        <div 
          className={`ride-option ${selectedRide === 'auto' ? 'selected' : ''}`}
          onClick={() => handleRideSelect('auto')}
        >
          <div className="ride-option-icon bg-women-peach">
            <Navigation className="text-orange-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">Auto</h3>
            <p className="text-xs text-gray-500">Comfortable for 2-3 people</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">₹80</p>
            <p className="text-xs text-gray-500">7 mins</p>
          </div>
        </div>

        <div 
          className={`ride-option ${selectedRide === 'car' ? 'selected' : ''}`}
          onClick={() => handleRideSelect('car')}
        >
          <div className="ride-option-icon bg-women-blue">
            <Car className="text-blue-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">Car</h3>
            <p className="text-xs text-gray-500">Premium comfort for 4</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">₹120</p>
            <p className="text-xs text-gray-500">10 mins</p>
          </div>
        </div>
      </div>

      <Button 
        className="w-full bg-women-purple hover:bg-women-purple/90 mt-4" 
        onClick={handleBookRide}
      >
        Book {selectedRide.charAt(0).toUpperCase() + selectedRide.slice(1)}
      </Button>
    </div>
  );
};

export default RideOptions;
