import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const DriverSettings = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('driver@example.com');
  const [phone, setPhone] = useState('+1 234 567 8900');

  const handleSaveSettings = () => {
    // Save settings logic here, e.g., API call to save changes
    alert('Settings saved successfully');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Driver Settings</h1>
      <div className="space-y-4">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
        <Button onClick={handleSaveSettings}>Save</Button>
      </div>
    </div>
  );
};

export default DriverSettings;
