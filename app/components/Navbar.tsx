import Image from "next/image";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.png";
import Link from "next/link";
import UserNav from "./UserNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ModeToggle from "./ModeToggle";

const Navbar = async () => {
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

        <Tabs
          defaultValue="place"
          className="border-[1px] w-full md:w-auto rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
        >
          <TabsList className="">
            <TabsTrigger value="place">Anywhere</TabsTrigger>
            <TabsTrigger value="dates">Add week</TabsTrigger>
            <TabsTrigger value="guests">Add guests</TabsTrigger>
          </TabsList>
          <TabsContent value="place" className="text-muted-foreground">
            Search destination
          </TabsContent>
          <TabsContent value="dates" className="text-muted-foreground">
            Check in
          </TabsContent>
          <TabsContent value="guests" className="text-muted-foreground">
            Add guests
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-center space-x-4">
          <div className="hover:bg-gray-100 hover:rounded-full px-3 py-2 dark:hover:bg-gray-900 dark:hover:text-white">
            <h3> Airbnb your home</h3>
          </div>

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
