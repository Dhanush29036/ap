import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface LocationSearchProps {
  onLocationSelect: (location: { pickup: string; destination: string }) => void;
}

const LocationSearch = ({ onLocationSelect }: LocationSearchProps) => {
  const [expanded, setExpanded] = useState(false);
  const [pickup, setPickup] = useState('Current Location');
  const [destination, setDestination] = useState('');

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    if (destination) {
      onLocationSelect({ pickup, destination });
    }
    setExpanded(false);
  };

  return (
    <div className={`absolute top-0 left-0 right-0 bg-white shadow-md z-10 transition-all ${
      expanded ? 'h-auto' : 'h-16'
    }`}>
      {!expanded ? (
        <div 
          className="flex items-center px-4 h-16 cursor-pointer" 
          onClick={handleExpand}
        >
          <Search className="text-gray-400 mr-2" size={20} />
          <div className="flex-1">
            <Input 
              placeholder="Where to?" 
              className="border-0 focus-visible:ring-0 p-0 h-auto"
              readOnly
            />
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex mb-4">
            <div className="mr-3 flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-women-purple"></div>
              <div className="w-[1px] h-12 bg-gray-300 my-1"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <p className="text-xs text-gray-500">PICKUP</p>
                <Input
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="border-0 border-b focus-visible:ring-0 px-0 rounded-none"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500">DESTINATION</p>
                <Input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where to?"
                  className="border-0 border-b focus-visible:ring-0 px-0 rounded-none"
                  autoFocus
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2 pt-2">
            <p className="text-xs font-medium text-gray-500">RECENT PLACES</p>
            <div className="space-y-3">
              {['Work - Tech Park', 'Mom\'s House', 'Central Mall'].map((place, index) => (
                <div 
                  key={index}
                  className="flex items-center py-2 cursor-pointer"
                  onClick={() => {
                    setDestination(place);
                    handleCollapse();
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="font-medium">{place}</p>
                    <p className="text-xs text-gray-500">Saved addresses</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
