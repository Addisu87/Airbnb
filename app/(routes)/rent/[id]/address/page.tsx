"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import BottomBar from "@/app/components/BottomBar";
import { useCountries } from "@/app/hooks/getCountries";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { createLocation } from "@/app/actions";

export default function AddressRoute({ params }: { params: { id: string } }) {
  const [locationValue, setLocationValue] = useState("");

  const { getAllCountries } = useCountries();

  const LazyMap = dynamic(() => import("@/app/components/Map"), {
    ssr: false,
    loading: () => <Skeleton className="h-[50vh] w-full" />,
  });

  return (
    <div className="w-3/5 mx-auto">
      <div className="mb-36">
        <h2 className="text-2xl font-semibold tracking-tight transition-colors mb-10">
          Where is your home located?
        </h2>

        <form action={createLocation}>
          <input type="hidden" name="homeId" value={params.id} />
          <input type="hidden" name="countryValue" value={locationValue} />

          <div className="mb-5">
            <Select required onValueChange={(value) => setLocationValue(value)}>
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
          <LazyMap locationValue={locationValue} />
        </form>
      </div>
      <BottomBar />
    </div>
  );
}
