import Image from "next/image";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.png";
import Link from "next/link";
import UserNav from "./UserNav";
import ModeToggle from "./ModeToggle";
import SearchBar from "./SearchBar";
import SearchModal from "./SearchModal";

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
          {/* <div className="hover:bg-gray-100 hover:rounded-full px-3 py-2 dark:hover:bg-gray-900 dark:hover:text-white">
            Airbnb your home
          </div> */}
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
