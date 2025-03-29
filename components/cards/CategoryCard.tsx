import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CategoryProps = {
  params: {
    name: string;
    image: string;
    description?: string;
    itemCount?: number;
    slug?: string;
  };
  key: number;
};

const CategoryCard: React.FC<CategoryProps> = ({ params, key }) => {
  const { image, name, description, itemCount, slug = "#" } = params;

  return (
    <Link href={slug}>
      <Card
        className={cn(
          "embla__slide group relative overflow-visible rounded-xl",
          "transition-all duration-500 ease-out",
          "hover:shadow-xl hover:-translate-y-1",
          "[&::-webkit-scrollbar]:w-2",
          "[&::-webkit-scrollbar-track]:bg-transparent",
          "[&::-webkit-scrollbar-thumb]:bg-white/20",
          "[&::-webkit-scrollbar-thumb]:rounded-full",
          "hover:[&::-webkit-scrollbar-thumb]:bg-white/40"
        )}
        key={key}
      >
        <CardContent className="relative p-0">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              priority
              className={cn(
                "object-cover",
                "transition-transform duration-700 ease-out",
                "group-hover:scale-110"
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div
              className={cn(
                "absolute inset-0",
                "bg-gradient-to-t from-black/80 via-black/30 to-transparent",
                "transition-opacity duration-500",
                "opacity-60 group-hover:opacity-80"
              )}
            />
          </div>

          {/* Content Overlay */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0",
              "p-4 sm:p-6 text-white",
              "transform transition-transform duration-500",
              "translate-y-4 group-hover:translate-y-0",
              "overflow-y-auto max-h-[80%]",
              "[&::-webkit-scrollbar]:w-2",
              "[&::-webkit-scrollbar-track]:bg-transparent",
              "[&::-webkit-scrollbar-thumb]:bg-white/20",
              "[&::-webkit-scrollbar-thumb]:rounded-full",
              "hover:[&::-webkit-scrollbar-thumb]:bg-white/40"
            )}
          >
            {/* Category Name */}
            <h3
              className={cn(
                "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold",
                "mb-1 sm:mb-2 tracking-tight",
                "capitalize line-clamp-1 sm:line-clamp-2"
              )}
            >
              {name}
            </h3>

            {/* Description */}
            {description && (
              <p
                className={cn(
                  "text-xs sm:text-sm text-white/80",
                  "mb-2 sm:mb-3 line-clamp-2",
                  "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-500"
                )}
              >
                {description}
              </p>
            )}

            {/* Items Count & Action */}
            <div
              className={cn(
                "flex items-center justify-between",
                "transform transition-all duration-500",
                "opacity-0 group-hover:opacity-100",
                "-translate-y-4 group-hover:translate-y-0"
              )}
            >
              {itemCount !== undefined && (
                <span className="text-xs sm:text-sm text-white/80">
                  {itemCount} items
                </span>
              )}
              <span
                className={cn(
                  "flex items-center text-xs sm:text-sm font-medium",
                  "transform transition-transform group-hover:translate-x-1"
                )}
              >
                Explore <ArrowRight size={14} className="ml-1 sm:size-4" />
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
