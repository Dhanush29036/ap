import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from '@/components/MapComponent';
import LocationSearch from '@/components/LocationSearch';
import RideOptions from '@/components/RideOptions';
import RideConfirmation from '@/components/RideConfirmation';
import AppHeader from '@/components/AppHeader';
import AppSidebar from '@/components/AppSidebar';
import ProfileMenu from '@/components/ProfileMenu';
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
    <div className="h-screen bg-white relative flex flex-col pt-16 overflow-hidden">
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Section */}
      <div className="flex flex-col flex-1 relative overflow-hidden">
        {/* Header */}
        <AppHeader onProfileClick={() => setShowProfileMenu(true)} />

        {/* Location Search Bar */}
        <div className="relative z-30 p-4 bg-white shadow-md rounded-md w-11/12 max-w-2xl mx-auto mt-4">
          <LocationSearch onLocationSelect={handleLocationSelect} />
        </div>

        {/* Map Section */}
        <div className="flex-1 relative z-10 mt-4">
          <MapComponent />
        </div>

        {/* Ride Options Popup */}
        {showRideOptions && (
          <div className="absolute inset-0 flex items-center justify-center z-40">
            <RideOptions onSelectRide={handleRideSelect} />
          </div>
        )}

        {/* Ride Confirmation Popup */}
        {showRideConfirmation && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <RideConfirmation 
              rideType={selectedRide} 
              onComplete={handleRideComplete}
            />
          </div>
        )}

        {/* Profile Menu */}
        {showProfileMenu && (
          <ProfileMenu 
            onClose={() => setShowProfileMenu(false)}
            onLogout={handleLogout}
          />
        )}

        {/* Book Bike Button */}
        <div className="absolute bottom-6 w-full flex justify-center z-50">
          <Button
            onClick={handleLocationSelect}
            className="px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-700"
          >
            Book Bike
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

