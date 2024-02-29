import { createCategoryPage } from "@/app/actions";
import SelectCategory from "@/app/components/SelectCategory";
import BottomBar from "@/app/components/BottomBar";

export default function BookingRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight translate-colors">
          Which of these best describe your home?
        </h2>
      </div>

      <form action={createCategoryPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <SelectCategory />
        <BottomBar />
      </form>
    </>
  );
}
