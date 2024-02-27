import { createCategoryPage } from "@/app/actions";
import SelectCategory from "@/app/components/SelectCategory";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RentRoute({ params }: { params: { id: string } }) {
  return (
    <>
      {/* <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight translate-colors">
          Which of these best describe your home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <SelectCategory />

        <div className="fixed w-full bottom-0 z-10 bg-white border-t h-24">
          <div className="flex items-center justify-between mx-auto px-4 lg:px-10 h-full ">
            <Button variant="secondary" asChild>
              Cancel
            </Button>
            <Button>Next</Button>
          </div>
        </div>
      </form> */}

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Airbnb home</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle>Which of these best describe your home?</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center gap-4">
              <form action={createCategoryPage}>
                <input type="hidden" name="homeId" value={params?.id} />
                <SelectCategory />
              </form>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Next</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
