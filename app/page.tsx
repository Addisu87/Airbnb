import prismadb from "@/lib/db";

import Categories from "./components/Categories";
import ListingCard from "./components/ListingCard";
import { Suspense } from "react";
import CardSkeleton from "./components/CardSkeleton";

async function getData({
  searchParams,
}: {
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
    },
  });
  return data;
}

async function ShowItems({
  searchParams,
}: {
  searchParams?: { filter?: string };
}) {
  const data = await getData({ searchParams: searchParams });
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      {data.map((item) => (
        <ListingCard
          key={item.id}
          description={item.description as string}
          imagePath={item.photo as string}
          location={item.country as string}
          price={item.price as number}
        />
      ))}
    </div>
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
