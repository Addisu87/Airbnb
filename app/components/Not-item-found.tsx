import { File } from "lucide-react";

const NotItemFound = () => {
  return (
    <div className="flex flex-col min-h-[350px] items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <File className="h-10 w-10 text-primary" />
      </div>
      <h4 className="m-6 text-xl font-semibold">
        Sorry, there is no any listing found for this category...
      </h4>
      <p className="mt-2 text-center text-sm leading-6 text-muted-foreground">
        Please check another category or create your own list.
      </p>
    </div>
  );
};

export default NotItemFound;
