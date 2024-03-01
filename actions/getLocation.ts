"use server";

import { redirect } from "next/navigation";

import prismadb from "@/lib/db";

export async function getLocation(formData: FormData) {
  const homeId = formData.get("homeId") as string;
  const countryValue = formData.get("countryValue") as string;

  const data = await prismadb.home.update({
    where: {
      id: homeId,
    },
    data: {
      country: countryValue,
      addedLocation: true,
    },
  });

  return redirect("/");
}
