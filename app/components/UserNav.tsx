/* eslint-disable @next/next/no-img-element */
import { MenuIcon } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserNav = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

          <Avatar className="hidden lg:block">
            <AvatarImage
              src={
                user?.picture ??
                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              }
            />
            <AvatarFallback>PI</AvatarFallback>
          </Avatar>
          {/* <img
            src={
              user?.picture ??
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            alt="Profile image"
            className="rounded-full h-8 w-8 hidden lg:block"
          /> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuItem>
            <form className="w-full">
              <button type="submit" className="w-full text-start">
                Airbnb your home
              </button>
            </form>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href="/listings" className="w-full">
              My Listing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/favorites" className="w-full">
              My Favorites
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/reservations" className="w-full">
              My Reservations
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {user ? (
            <DropdownMenuItem>
              <LogoutLink className="w-full">Log out</LogoutLink>
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem>
                <RegisterLink className="w-full">Sign up</RegisterLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LoginLink className="w-full">Sign in</LoginLink>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNav;
