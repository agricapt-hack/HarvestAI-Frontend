
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Lock, Eye, EyeOff, Mail, CalendarDays, Phone, User2 } from 'lucide-react';
import { useSignUp } from '@clerk/clerk-react';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    // confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({ lat: null, lng: null });

  const { toast } = useToast();
  const { isLoaded, signUp, setActive } = useSignUp();

  const BASE_URL_AGRI = import.meta.env.VITE_BACKEND_BASE_URL_AGRI;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (!isLoaded) return;
    e.preventDefault();

    if(!location.lat || !location.lng) {
      toast({
        title: "Location is required to proceed, kindly fetch your current location",
        variant: "destructive",
      });
      return;
    }

    // if (formData.password !== formData.confirmPassword) {
    //   toast({
    //     title: "Passwords don't match",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    setIsLoading(true);
    try {
      console.log('Signup data:', formData);

      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        unsafeMetadata: {
          firstName: formData.name.split(" ")[0] || "",
          lastName: formData.name.split(" ").slice(-1)[0] || "",
          phoneNumber: formData.phone || ""
        }
      }).then( async (res) => {
        await axios.post(`${BASE_URL_AGRI}/registration/add-user`, {
          user_id: formData.email,
          name: formData.name,
          email: formData.email,
          whatsapp_number: formData.phone,
          location: {
            latitude: location.lat,
            longitude: location.lng
          }
        });
        console.log('SignUp response:', res, res.status);
        toast({
          title: "Account created successfully!",
        });
      }).catch((err) => {
        console.error('SignUp error:', err);
      });

      // await signUp.prepareEmailAddressVerification({
      //   strategy: 'email_link',
      //   redirectUrl: '/dashboard',
      // });
      // toast({ title: 'Email Verification', description: 'Link sent! Please verify your email address to complete the signup process.' });

      console.log('SignUp createdSessionId:', signUp.createdSessionId);
      await setActive({ session: signUp.createdSessionId });
    } catch (err) {
      alert(err.errors[0].message);
    } finally {
      setIsLoading(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        // confirmPassword: '',
      });
      setLocation({lat: null, lng: null});
    }
  };

  const handleOAuthSignUp = async (strategy: "oauth_google" | "oauth_facebook") => {
    try {
      await signUp?.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard"
      });
    } catch (error) {
      console.error("OAuth error:", error);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Set default location if geolocation fails
          setLocation({ lat: 28.6139, lng: 77.2090 });
        }
      );
    } else {
      // Set default location if geolocation is not supported
      setLocation({ lat: 28.6139, lng: 77.2090 });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Create Account
          </DialogTitle>
        </DialogHeader>

        {/* <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => handleOAuthSignUp("oauth_google")}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign In with Google
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => handleOAuthSignUp("oauth_facebook")}
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Sign In with Facebook
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div> */}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>
          </div>

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
            <Label htmlFor="phone">Mobile Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="phone"
                name="phone"
                type="number"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleInputChange}
                className="pl-10 appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                placeholder="Enter a password"
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

          <div className="space-y-2">
            <div className="relative">
              <div className="col-span-3">
                <Button
                  type="button"
                  onClick={getCurrentLocation}
                  variant="outline"
                  className="w-full"
                >
                  Get Current Location
                </Button>
                {location.lat && location.lng && (
                  <p className="text-sm text-gray-500 mt-2">
                    Lat: {location.lat.toFixed(6)}, Lng: {location.lng.toFixed(6)}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div> */}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-primary hover:underline font-medium"
            >
              Sign In
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
