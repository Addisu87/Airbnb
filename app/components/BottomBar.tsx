import Link from "next/link";

import { Button } from "@/components/ui/button";

import { SubmitButton } from "./SubmitButtons";

const BottomBar = () => {
  return (
    <>
      <div className="fixed w-3/5 bottom-0 z-10 bg-white border-t h-24">
        <div className="flex items-center justify-between mx-auto px-4 lg:px-10 h-full ">
          <Button variant="ghost">
            <Link href="/">Cancel</Link>
          </Button>
          <SubmitButton />
        </div>
      </div>
    </>
  );
};

export default BottomBar;
