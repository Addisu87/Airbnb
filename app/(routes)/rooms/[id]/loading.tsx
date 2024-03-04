import CardSkeleton from "@/app/components/CardSkeleton";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-[75%] mx-auto mt-10 mb-12">
      <Skeleton className="h-10 w-1/4" />
      <Skeleton className="w-full h-[550px] mt-5" />

      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-2/3">
          <Skeleton className="h-4 w-1/4 mb-3" />
          <Skeleton className="h-4 w-full mb-6" />

          <div className="flex space-x-3  items-center mt-6">
            <Skeleton className="h-12 w-12 rounded-full mr-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>

          <Separator className="my-7" />

          <div className="flex space-x-3 items-center mt-6">
            <Skeleton className="h-12 w-12 rounded-sm mr-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>

          <Separator className="my-7" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>

          <div>
            <Skeleton className="w-full h-[450px] mt-5" />
          </div>
        </div>

        <div className="w-1/3 flex flex-col space-y-2">
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
