import { redirect } from "next/navigation";

import prismadb from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Heading from "@/app/components/Heading";
import NotFound from "@/app/components/Not-Found";
import ListingCard from "@/app/components/ListingCard";

async function getData(userId: string) {
  const data = await prismadb.favorite.findMany({
    where: {
      userId: userId,
    },
    select: {
      home: {
        select: {
          photo: true,
          id: true,
          favorite: true,
          price: true,
          country: true,
          description: true,
        },
      },
    },
  });

  return data;
}

const FavoritesRoute = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect("/");

  const data = await getData(user.id);

  return (
    <section className="container mx-auto px-5 lg:px-10 mt-6">
      <Heading title="Your favorites" />

      {data.length > 0 ? (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.home?.id}
              description={item.home?.description as string}
              favoriteId={item.home?.favorite[0].id as string}
              location={item.home?.country as string}
              pathname="/favorites"
              homeId={item.home?.id as string}
              price={item.home?.price as number}
              userId={user.id}
              imagePath={item.home?.photo as string}
              isInFavoriteList={
                (item.home?.favorite.length as number) > 0 ? true : false
              }
            />
          ))}
        </div>
      ) : (
        <NotFound
          title="Your favorite is empty...."
          subtitle="Sorry, please add you favorites lists"
        />
      )}
    </section>
  );
};

export default FavoritesRoute;
