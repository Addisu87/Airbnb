"use server";

import prismadb from "@/lib/db";

export async function addFavorite(formData: FormData) {
  const homeId = formData.get("homeId") as string;
  const userId = formData.get("userId") as string;

  const data = await prismadb.favorite.create({
    data: {
      id: homeId,
      userId: userId,
    },
  });
}
