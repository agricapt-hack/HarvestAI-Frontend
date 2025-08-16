
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, Mail } from 'lucide-react';
import { useSignIn } from '@clerk/clerk-react';
import { useToast } from '@/hooks/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (!isLoaded) return;
    e.preventDefault();


    setIsLoading(true);
    try {
      console.log('Login data:', formData);

      await signIn.create({
        identifier: formData.email,
        password: formData.password,
      }).then((res) => {
        console.log('SignIn response:', res, res.status);
        toast({
          title: "Logged in successfully!",
        });
        onClose();
        setFormData({
          email: '',
          password: '',
        });
      }).catch((err) => {
        console.error('SignIn error:', err);
        toast({
          title: "Login failed",
          description: err.errors[0].message,
          variant: "destructive",
        });
      });
      console.log('SignIn createdSessionId:', signIn.createdSessionId);
      await setActive({ session: signIn.createdSessionId });
    } catch (err) {
      alert(err.errors[0].message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-2xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Login
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="text-primary hover:underline font-medium"
            >
              Sign Up
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
