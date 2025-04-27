import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const DriverLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login logic
    if (email === 'driver@example.com' && password === 'password') {
      navigate('/driver-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Driver Login</h2>
      <div className="space-y-4">
        <Input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
        />
        <Input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
        />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default DriverLogin;
