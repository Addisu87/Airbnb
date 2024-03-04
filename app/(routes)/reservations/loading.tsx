import CardSkeleton from "@/app/components/CardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-6">
      <div>
        <Skeleton className="h-10 w-1/4" />
      </div>
      <CardSkeleton />
    </section>
  );
};

export default Loading;
