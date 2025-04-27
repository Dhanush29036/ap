import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MapComponent from '@/components/MapComponent'; // Assuming you have a MapComponent

const DriverDashboard = () => {
  const [isRideAccepted, setIsRideAccepted] = useState(false);
  const navigate = useNavigate();

  const acceptRide = () => {
    setIsRideAccepted(true);
    // Here, you can add any logic to update the ride status, etc.
  };

  const rejectRide = () => {
    setIsRideAccepted(false);
  };

  return (
    <div className="h-screen p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Driver Dashboard</h1>
      
      {/* Map Component */}
      <div className="w-full h-64 bg-gray-200 mb-4">
        <MapComponent />
      </div>

      {/* Ride Information */}
      {!isRideAccepted ? (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Available Ride</h2>
          <div className="space-y-2">
            <p>Pickup Location: Central Park</p>
            <p>Drop Location: Downtown</p>
            <p>Fare: $15</p>
          </div>
          
          <div className="flex space-x-4">
            <Button onClick={acceptRide} className="bg-green-500">
              Accept Ride <CheckCircle />
            </Button>
            <Button onClick={rejectRide} className="bg-red-500">
              Reject Ride <XCircle />
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-lg font-semibold">Ride Accepted!</h2>
          <p>Your next ride is to Downtown. Navigate to the pickup location.</p>
        </div>
      )}

      {/* Settings, Payments, History */}
      <div className="flex justify-between">
        <Button onClick={() => navigate('/driver-settings')}>Settings</Button>
        <Button onClick={() => navigate('/driver-payments')}>Payments</Button>
        <Button onClick={() => navigate('/driver-history')}>Ride History</Button>
      </div>
    </div>
  );
};

export default DriverDashboard;
