"use client";

import Link from "next/link";
import { categories } from "./libs/categories";
import { LucideIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface CategoryProps {
  id: number;
  label: string;
  icon: LucideIcon;
  description: string;
}

const FilterItems: React.FC<CategoryProps> = ({
  id,
  icon,
  label,
  description,
}) => {
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
    <div className="flex gap-x-8 mt-5 w-full overflow-x-scroll items-center justify-center transition cursor-pointer no-scrollbar">
      {categories.map((item) => (
        <Link
          key={item.id}
          href={pathname + "?" + createQueryString("filter", item.label)}
        >
          <div>
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
