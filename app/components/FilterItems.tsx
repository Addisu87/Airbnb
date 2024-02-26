"use client";

import Link from "next/link";
import { categories } from "./libs/categories";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

const FilterItems = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();

  const createQueryString = useCallback(
    (label: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(label, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex gap-x-8 mt-5 w-full overflow-x-scroll transition cursor-pointer no-scrollbar">
      {categories.map((item) => (
        <Link
          key={item.id}
          href={pathname + "?" + createQueryString("filter", item.label)}
          className={cn(
            search === item.label
              ? "border-b-2 border-black pb-2 flex-shrink-0"
              : "opacity-70 flex-shrink-0",
            "flex flex-col gap-y-3 items-center justify-center"
          )}
        >
          <div className="">
            <item.icon size={26} />
            <div className="font-medium text-sm">
              <p>{item.label}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FilterItems;
