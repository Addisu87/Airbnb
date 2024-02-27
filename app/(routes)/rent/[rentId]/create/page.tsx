import SelectCategory from "@/app/components/SelectCategory";

export default function RentRoute() {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight translate-colors">
          Which of these best describe your home?
        </h2>

        <form action="">
          <SelectCategory />
        </form>
      </div>
    </>
  );
}
