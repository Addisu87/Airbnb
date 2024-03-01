import { Suspense, useReducer } from "react";

import prismadb from "@/lib/db";
import Categories from "@/app/components/Categories";
import ListingCard from "@/app/components/ListingCard";
import CardSkeleton from "@/app/components/CardSkeleton";
import NotItemFound from "@/app/components/Not-item-found";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData({
  searchParams,
  userId,
}: {
  userId: string | undefined;
  searchParams?: { filter?: string };
}) {
  const data = await prismadb.home.findMany({
    where: {
      addedCategory: true,
      addedDescription: true,
      addedLocation: true,
      categoryName: searchParams?.filter ?? undefined,
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      country: true,
      favorite: {
        where: {
          userId: userId ?? undefined,
        },
      },
    },
  });
  return data;
}

async function ShowItems({
  searchParams,
}: {
  searchParams?: { filter?: string };
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getData({ searchParams: searchParams, userId: user?.id });
  return (
    <>
      {data.length > 0 ? (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.id}
              description={item.description as string}
              imagePath={item.photo as string}
              location={item.country as string}
              price={item.price as number}
              userId={user?.id}
              favoriteId={item.favorite[0]?.id}
              isInFavoriteList={item.favorite.length > 0 ? true : false}
              homeId={item.id}
              pathname="/"
            />
          ))}
        </div>
      ) : (
        <NotItemFound />
      )}
    </>
  );
}

export default function Home({
  searchParams,
}: {
  searchParams?: { filter?: string };
}) {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <Categories />
      <Suspense key={searchParams?.filter} fallback={<CardSkeleton />}>
        <ShowItems searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
