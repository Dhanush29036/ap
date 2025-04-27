import { useState } from 'react';
import { Card } from "@/components/ui/card";

const ProfilePage = () => {
  // State to manage the profile information
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('K Apeksha reddy');
  const [phone, setPhone] = useState('+91 9440839940');
  const [email, setEmail] = useState('apekshareddy14@gmail.com');
  const [joinDate, setJoinDate] = useState('January 2024');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // In a real application, you would want to save these changes to the server here.
    setIsEditing(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-200"></div>
          <div>
            <h2 className="text-xl font-semibold">
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-b border-gray-300 focus:outline-none"
                />
              ) : (
                name
              )}
            </h2>
            <p className="text-gray-500">
              {isEditing ? (
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-b border-gray-300 focus:outline-none"
                />
              ) : (
                phone
              )}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-gray-300 focus:outline-none"
              />
            ) : (
              <p className="font-medium">{email}</p>
            )}
          </div>
          <div>
            <label className="text-sm text-gray-500">Joined</label>
            <p className="font-medium">{joinDate}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={handleEditToggle}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          {isEditing && (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Save
            </button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;

