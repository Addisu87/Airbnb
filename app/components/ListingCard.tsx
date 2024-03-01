import Image from "next/image";

interface ListingProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
}

const ListingCard: React.FC<ListingProps> = ({
  imagePath,
  description,
  location,
  price,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-72">
        <Image
          src={`https://bstgrdyurhlpzkfyoefz.supabase.co/storage/v1/object/public/images/${imagePath}`}
          alt="Image of House"
          fill
          className="rounded-lg h-full object-cover mb-3"
        />
      </div>
    </div>
  );
};

export default ListingCard;
