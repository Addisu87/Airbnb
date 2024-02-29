import { useCountries } from "@/app/hooks/getCountries";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddressRoute() {
  const { getAllCountries } = useCountries();

  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight transition-colors mb-10">
          Where is your home located?
        </h2>

        <form action="">
          <div className="mb-5">
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {getAllCountries().map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.flag} {item.label} / {item.region}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
    </>
  );
}
