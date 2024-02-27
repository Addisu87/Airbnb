"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { categoryItems } from "@/app/libs/categoryItems";

const SelectCategory = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-10 w-3/5 mx-auto">
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card>
            <CardHeader>
              <item.icon size={26} />
              <h3 className="font-light">{item.label}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SelectCategory;
