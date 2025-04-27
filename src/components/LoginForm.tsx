import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

interface LoginFormProps {
  onLogin: () => void; // No arguments expected in the onLogin function
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);  // To manage the sending state
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false); // To manage the verifying state
  const { toast } = useToast();

  const handleSendOtp = () => {
    if (phoneNumber.length !== 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }
    
    setIsSendingOtp(true);
    // Simulating OTP sending
    setTimeout(() => {
      setShowOtp(true);
      toast({
        title: "OTP Sent",
        description: "A verification code has been sent to your phone",
      });
      setIsSendingOtp(false);
    }, 1000);
  };

  const handleVerifyOtp = () => {
    if (otp.length < 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid OTP",
        variant: "destructive",
      });
      return;
    }

    setIsVerifyingOtp(true);
    // Simulating OTP verification
    setTimeout(() => {
      toast({
        title: "Login successful",
        description: "Welcome to Women Rides",
      });
      onLogin(); // Trigger the onLogin callback after successful login
      setIsVerifyingOtp(false);
    }, 1000);
  };

  return (
    <div className="space-y-6 p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Welcome to Women Rides</h1>
        <p className="text-gray-500 mt-1">Safe and comfortable rides by women</p>
      </div>

      {!showOtp ? (
        <>
          <div className="space-y-2">
            <label className="font-medium text-sm">Phone Number</label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border-gray-300"
            />
          </div>
          <Button 
            className="w-full bg-women-purple hover:bg-women-purple/90" 
            onClick={handleSendOtp}
            disabled={isSendingOtp}
          >
            {isSendingOtp ? 'Sending OTP...' : 'Send OTP'}
          </Button>

          <div className="relative flex items-center justify-center my-4">
            <div className="w-full h-[1px] bg-gray-200" />
            <span className="absolute bg-white px-2 text-xs text-gray-400">OR</span>
          </div>

          <div className="space-y-4">
            <Button variant="outline" className="w-full">
              <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                {/* Google Icon */}
              </svg>
              Continue with Google
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <label className="font-medium text-sm">Enter OTP sent to {phoneNumber}</label>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border-gray-300 text-center text-2xl letter-spacing-wide"
              maxLength={6}
            />
          </div>
          <Button 
            className="w-full bg-women-purple hover:bg-women-purple/90" 
            onClick={handleVerifyOtp}
            disabled={isVerifyingOtp}
          >
            {isVerifyingOtp ? 'Verifying OTP...' : 'Verify & Login'}
          </Button>
          <Button 
            variant="link" 
            className="w-full" 
            onClick={() => setShowOtp(false)}
          >
            Change Phone Number
          </Button>
        </>
      )}
    </div>
  );
};

export default LoginForm;
