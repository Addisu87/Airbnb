import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="space-y-3 flex flex-col">
          <Skeleton className="aspect-square rounded-xl" />
          <div className="space-y-2 flex flex-col">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
