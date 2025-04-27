import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface AppHeaderProps {
  onProfileClick: () => void;
}

const AppHeader = ({ onProfileClick }: AppHeaderProps) => {
  const { toast } = useToast();
  
  const handleNotificationClick = () => {
    toast({
      title: "No new notifications",
      description: "We'll notify you when there are updates",
    });
  };

  return (
    <header className="flex justify-between items-center p-4">
      <div>
        <h1 className="font-semibold text-lg">Women Rides</h1>
        <p className="text-xs text-gray-500">Safe rides by women drivers</p>
      </div>
      <div className="flex space-x-2">
        <Button size="icon" variant="ghost" onClick={handleNotificationClick}>
          <Bell size={18} />
        </Button>
        <Button size="icon" variant="ghost" onClick={onProfileClick}>
          <User size={18} />
        </Button>
      </div>
    </header>
  );
};

export default AppHeader;
