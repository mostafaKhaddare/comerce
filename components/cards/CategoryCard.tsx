import Image from "next/image";
import { Card, CardContent } from "../ui/card";
type CategoryProps = {
  params: {
    name: string;
    image: string;
    description?: string; // Add any extra props you might need
  };
  key: number; // Add any extra props you might need
};
const CategoryCard: React.FC<CategoryProps> = ({ params, key }) => {
  const { image, name } = params;
  return (
    <>
      <Card className="embla__slide overflow-hidden rounded-lg" key={key}>
        <CardContent className="relative p-0">
          {/* Image Container */}
          <div className="relative aspect-[3/4] md:aspect-[3/4] ">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-all hover:opacity-90 duration-300 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* Title Overlay */}
          <div className="absolute text-center bottom-[-10px] md:bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-accent-blue/100 to-transparent">
            <h3 className=" capitalize text-white scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight">
              {name}
            </h3>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CategoryCard;
