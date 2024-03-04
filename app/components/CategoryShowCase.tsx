import { categoryItems } from "@/lib/categoryItems";

const CategoryShowCase = ({ categoryName }: { categoryName: string }) => {
  const category = categoryItems.find((item) => item.label === categoryName);

  const Icon = category?.icon;

  if (!Icon) {
    return null;
  }

  return (
    <div className="flex items-center ">
      <Icon size={32} />
      <div className="flex flex-col ml-4">
        <h3 className="font-medium">{category?.label}</h3>
        <p className="text-muted-foreground">{category?.description}</p>
      </div>
    </div>
  );
};

export default CategoryShowCase;
