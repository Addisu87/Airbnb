import { redirect } from "next/navigation";

import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/ListingCard";
import NotFound from "@/app/components/Not-Found";
import prismadb from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData(userId: string) {
  const data = await prismadb.reservation.findMany({
    where: {
      userId: userId,
    },
    select: {
      home: {
        select: {
          id: true,
          photo: true,
          country: true,
          description: true,
          price: true,
          favorite: {
            where: {
              userId: userId,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

const ReservationsRoute = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  const data = await getData(user.id);

  return (
    <section className="container mx-auto px-5 lg:px-10 mt-6">
      <Heading title="Your Reservations" />

      {data.length > 0 ? (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.home?.id}
              description={item.home?.description as string}
              favoriteId={item.home?.favorite[0]?.id as string}
              location={item.home?.country as string}
              pathname="/reservations"
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
          title="Please list a home on airbnb to show it here...."
          subtitle="Sorry, you don't have any reservations are listed!"
        />
      )}
    </section>
  );
};

export default ReservationsRoute;
