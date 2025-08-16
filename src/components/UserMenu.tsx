import { useState } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  if (!isSignedIn || !user) {
    return null;
  }

  const userInitials = `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage 
              src={user.imageUrl} 
              alt={`${user.firstName} ${user.lastName}`}
            />
            <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-500 text-white font-semibold">
              {userInitials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="flex items-center justify-start gap-2 p-3">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium text-m">
              <b>{user.primaryEmailAddress?.emailAddress?.slice(0, 15)+'***'}</b>
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDashboard} className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600 focus:text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;