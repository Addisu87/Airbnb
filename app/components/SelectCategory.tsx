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
    <div>
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SelectCategory;
