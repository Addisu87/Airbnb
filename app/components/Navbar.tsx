import Image from "next/image";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.png";
import Link from "next/link";
import UserNav from "./UserNav";

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

        <div className="flex divide-x gap-x-3  border-gray-100 px-2 py-2 bg-gray-100 rounded-lg">
          <p>Guests</p>
          <p>Rooms</p>
          <p>Restrooms</p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <div className="hover:bg-gray-100 hover:rounded-full px-3 py-2">
            <Link href="/">Airbnb your home</Link>
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
