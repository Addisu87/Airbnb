"use server";

import prismadb from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteFavorite(formData: FormData) {
  const favoriteId = formData.get("favoriteId") as string;
  const userId = formData.get("userId") as string;
  const pathname = formData.get("pathname") as string;

  const data = await prismadb.favorite.delete({
    where: {
      id: favoriteId,
      userId: userId,
    },
  });

  revalidatePath(pathname);
}
