import Image from "next/image";

import prismadb from "@/lib/db";
import CategoryShowCase from "@/app/components/CategoryShowCase";
import Heading from "@/app/components/Heading";
import { useCountries } from "@/app/hooks/getCountries";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// fetch data
async function getData(homeId: string) {
  const data = await prismadb.home.findUnique({
    where: {
      id: homeId,
    },
    select: {
      title: true,
      description: true,
      guests: true,
      bedrooms: true,
      bathrooms: true,
      photo: true,
      price: true,
      country: true,
      categoryName: true,
      user: {
        select: {
          imageSrc: true,
          firstName: true,
        },
      },
    },
  });

  return data;
}
const RoomsRoute = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(data?.country as string);

  return (
    <div className="w-[75%] mx-auto mt-10 mb-12">
      <Heading title={data?.title || ""} />
      <div className="relative h-[500px]">
        <Image
          src={`https://bstgrdyurhlpzkfyoefz.supabase.co/storage/v1/object/public/images/${data?.photo}`}
          alt="Image of House"
          fill
          className="rounded-lg h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-between gap-x-24 mt-8">
        <div className="w-2/3">
          <h3 className="font-medium text-base">
            {country?.flag} {country?.label} / {country?.region}
          </h3>
          <div className="flex gap-x-2 text-muted-foreground">
            <p>{data?.guests} Guests</p> *<p>{data?.bedrooms} Bedrooms</p> *
            <p>{data?.bathrooms} Bathrooms</p>
          </div>
          <div className="flex items-center mt-6">
            <Avatar className="hidden lg:block">
              <AvatarImage
                src={
                  data?.user?.imageSrc ??
                  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                }
              />
            </Avatar>
            <div className="flex flex-col ml-4">
              <h3 className="font-medium">Hosted by {data?.user?.firstName}</h3>
              <p className="text-sm text-muted-foreground">Hosted since 2015</p>
            </div>
          </div>
          <Separator className="my-7" />
          <CategoryShowCase categoryName={data?.categoryName as string} />

          <Separator className="my-7" />
          <p className="text-muted-foreground">{data?.description}</p>
          <Separator className="my-7" />
        </div>
      </div>
    </div>
  );
};

export default RoomsRoute;
