import { MenuIcon } from "lucide-react";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserNav = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

          <Avatar className="hidden lg:block">
            <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <RegisterLink>Sign up</RegisterLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LoginLink>Sign in</LoginLink>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
          <DropdownMenuItem>Favorites</DropdownMenuItem>
          <DropdownMenuItem>Listing</DropdownMenuItem>
          <DropdownMenuItem>Reservations</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNav;
