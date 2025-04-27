import { User, Clock, Wallet, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProfileMenuProps {
  onClose: () => void;
  onLogout: () => void;
}

const ProfileMenu = ({ onClose, onLogout }: ProfileMenuProps) => {
  const menuItems = [
    { icon: <User size={18} />, label: 'My Profile', action: () => {} },
    { icon: <Clock size={18} />, label: 'Ride History', action: () => {} },
    { icon: <Wallet size={18} />, label: 'Payments', action: () => {} },
    { icon: <Settings size={18} />, label: 'Settings', action: () => {} },
    { icon: <LogOut size={18} />, label: 'Logout', action: onLogout },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose}>
      <div 
        className="absolute top-0 right-0 h-full w-3/4 max-w-xs bg-white animate-slide-in-right p-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="py-6 flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
            <div>
              <h3 className="font-semibold text-lg">Hello, User!</h3>
              <p className="text-gray-500">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex-1 space-y-0.5">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start font-normal h-12"
                onClick={item.action}
              >
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  {item.icon}
                </span>
                {item.label}
              </Button>
            ))}
          </div>

          <div className="py-6">
            <p className="text-xs text-center text-gray-500">
              App version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
