import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from '@/components/MapComponent';
import LocationSearch from '@/components/LocationSearch';
import RideOptions from '@/components/RideOptions';
import RideConfirmation from '@/components/RideConfirmation';
import AppHeader from '@/components/AppHeader';
import AppSidebar from '@/components/AppSidebar';
import ProfileMenu from '@/components/ProfileMenu'; // You were using ProfileMenu but forgot to import
import { Button } from '@/components/ui/button';

const HomePage: React.FC = () => {
  const [showRideOptions, setShowRideOptions] = useState<boolean>(false);
  const [showRideConfirmation, setShowRideConfirmation] = useState<boolean>(false);
  const [selectedRide, setSelectedRide] = useState<string>('');
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLocationSelect = () => {
    setShowRideOptions(true);
  };

  const handleRideSelect = (type: string) => {
    setSelectedRide(type);
    setShowRideOptions(false);
    setShowRideConfirmation(true);
  };

  const handleRideComplete = () => {
    navigate('/ride-confirmation');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="h-screen bg-white relative pt-16"> {/* Added padding top to prevent content overlap */}
      <AppSidebar />
      <div className="flex-1">
        <AppHeader onProfileClick={() => setShowProfileMenu(true)} />
        
        <div className="flex-1 relative">
          <MapComponent />
          <LocationSearch onLocationSelect={handleLocationSelect} />
        </div>

        {/* Ride Options Popup */}
        {showRideOptions && (
          <RideOptions onSelectRide={handleRideSelect} />
        )}

        {/* Ride Confirmation Popup */}
        {showRideConfirmation && (
          <RideConfirmation 
            rideType={selectedRide} 
            onComplete={handleRideComplete}
          />
        )}

        {/* Profile Menu */}
        {showProfileMenu && (
          <ProfileMenu 
            onClose={() => setShowProfileMenu(false)}
            onLogout={handleLogout}
          />
        )}

        {/* Booking Option Button */}
        <div className="flex justify-center mt-4">
          <Button onClick={handleLocationSelect}>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
