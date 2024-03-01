import { File } from "lucide-react";
import Heading from "./Heading";

const NotItemFound = () => {
  return (
    <div className="flex flex-col min-h-[350px] items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <File className="h-10 w-10 text-primary" />
      </div>
      <div className="m-6">
        <Heading
          title="Sorry, there is no any listing found for this category..."
          subtitle="Please check another category or create your own list."
        />
      </div>
    </div>
  );
};

export default NotItemFound;
