import { createCategoryPage } from "@/app/actions";
import SelectCategory from "@/app/components/SelectCategory";
import { Button } from "@/components/ui/button";

export default function RentRoute({ params }: { params: { rentId: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight translate-colors">
          Which of these best describe your home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.rentId} />
        <SelectCategory />

        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
          <div className="flex items-center justify-between mx-auto px-4 lg:px-10 h-full ">
            <Button variant="secondary" asChild>
              Cancel
            </Button>
            <Button>Next</Button>
          </div>
        </div>
      </form>
    </>
  );
}
