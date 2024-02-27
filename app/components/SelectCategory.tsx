"use client";

import { useState } from "react";

import { Card, CardHeader } from "@/components/ui/card";
import { categoryItems } from "@/app/libs/categoryItems";

const SelectCategory = () => {
  const [selectCategory, setSelectCategory] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-4 gap-8 mt-10 w-3/5 mx-auto">
      <input
        type="hidden"
        name="categoryName"
        value={selectCategory as string}
      />
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={selectCategory === item.label ? "border-primary" : ""}
            onClick={() => setSelectCategory(item.label)}
          >
            <CardHeader>
              <item.icon size={28} />
              <h3 className="font-light">{item.label}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SelectCategory;
