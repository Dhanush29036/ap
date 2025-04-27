import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home'); // After login, navigate to the home page
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-women-light-purple to-white p-4">
      <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
