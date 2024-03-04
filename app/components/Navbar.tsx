import Link from "next/link";
import Image from "next/image";

import DesktopLogo from "@/public/airbnb-desktop.png";
import MobileLogo from "@/public/airbnb-mobile.png";
import UserNav from "@/app/components/UserNav";
import ModeToggle from "@/app/components/ModeToggle";
import SearchModal from "@/app/components/SearchModal";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="container mx-auto px-5 lg:px-10  flex items-center justify-between py-5">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="Desktop logo"
            className="w-32 hidden lg:block"
          />
          <Image
            src={MobileLogo}
            alt="Mobile logo"
            className="w-12 block lg:hidden"
          />
        </Link>

        <SearchModal />

        <div className="flex items-center justify-center space-x-4">
          <div>
            <ModeToggle />
          </div>
          <div className="rounded-full border px-5 py-2">
            <UserNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
