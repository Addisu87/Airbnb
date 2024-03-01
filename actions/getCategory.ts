"use server";

import { redirect } from "next/navigation";

import prismadb from "@/lib/db";

export async function getCategory(formData: FormData) {
  const categoryName = formData.get("categoryName") as string;
  const homeId = formData.get("homeId") as string;

  const data = await prismadb.home.update({
    where: {
      id: homeId,
    },
    data: {
      categoryName: categoryName,
      addedCategory: true,
    },
  });

  return redirect(`/rent/${homeId}/description`);
}
