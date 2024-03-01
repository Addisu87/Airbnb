import prismadb from "@/lib/db";

import Categories from "./components/Categories";
import ListingCard from "./components/ListingCard";

async function getData() {
  const data = await prismadb.home.findMany({
    where: {
      addedCategory: true,
      addedDescription: true,
      addedLocation: true,
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

const Home = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto px-5 lg:px-10 gap-8 mt-8">
      <Categories />

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 ">
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
    </div>
  );
};

export default Home;
