import { useNavigate } from "react-router-dom";
import { User, Clock, CreditCard, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppSidebar: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <User size={18} />, label: "My Profile", path: "/profile" },
    { icon: <Clock size={18} />, label: "Ride History", path: "/rides" },
    { icon: <CreditCard size={18} />, label: "Payments", path: "/payments" },
    { icon: <Settings size={18} />, label: "Settings", path: "/settings" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b p-4 flex justify-around z-50">
      <div className="py-2 flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
        <div>
          <h3 className="font-semibold">Jane Doe</h3>
          <p className="text-sm text-gray-500">+1 234 567 8900</p>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            className="font-normal"
            onClick={() => navigate(item.path)}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </Button>
        ))}
      </div>

      <Button
        variant="ghost"
        className="font-normal"
        onClick={handleLogout}
      >
        <span className="mr-2"><LogOut size={18} /></span>Logout
      </Button>
    </div>
  );
};

export default AppSidebar;
