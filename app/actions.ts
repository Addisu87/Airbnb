"use server";

import { redirect } from "next/navigation";

import prismadb from "@/lib/db";
import { supabase } from "@/lib/subabase";

export async function createAirbnbHome({ userId }: { userId: string }) {
  const data = await prismadb.home.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  let newData;

  if (data === null) {
    newData = await prismadb.home.create({
      data: {
        userId: userId,
      },
    });
    return redirect(`/rent/${newData.id}/booking`);
  }

  switch (true) {
    case data.addedCategory && !data.addedDescription:
      return redirect(`/rent/${data.id}/description`);

    case data.addedCategory && data.addedDescription && !data.addedLocation:
      return redirect(`/rent/${data.id}/address`);

    case data.addedCategory && data.addedDescription && data.addedLocation:
      newData = await prismadb.home.create({
        data: {
          userId: userId,
        },
      });
      return redirect(`/rent/${newData.id}/booking`);

    default:
      return redirect(`/rent/${data.id}/booking`);
  }
}

export async function createCategoryPage(formData: FormData) {
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

export async function CreateDescription(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price");
  const imageFile = formData.get("image") as File;
  const homeId = formData.get("homeId") as string;

  const guestNumber = formData.get("guest") as string;
  const roomNumber = formData.get("room") as string;
  const bathroomNumber = formData.get("bathroom") as string;

  const { data: imageData } = await supabase.storage
    .from("images")
    .upload(`${imageFile.name}-${new Date()}`, imageFile, {
      cacheControl: "2592000",
      contentType: "image/png",
    });

  const data = await prismadb.home.update({
    where: {
      id: homeId,
    },
    data: {
      title: title,
      description: description,
      guests: guestNumber,
      bedrooms: roomNumber,
      bathrooms: bathroomNumber,
      photo: imageData?.path,
      price: Number(price),
      addedDescription: true,
    },
  });

  return redirect(`/rent/${homeId}/address`);
}

export async function createLocation(formData: FormData) {
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
