import SelectCategory from "@/app/components/SelectCategory";
import BottomBar from "@/app/components/BottomBar";
import { getCategory } from "@/actions/getCategory";

export default function BookingRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto mb-36">
        <h2 className="text-3xl font-semibold tracking-tight translate-colors">
          Which of these best describe your home?
        </h2>

        <form action={getCategory}>
          <input type="hidden" name="homeId" value={params.id} />
          <SelectCategory />

          <BottomBar />
        </form>
      </div>
    </>
  );
}
