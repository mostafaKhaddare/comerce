import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Info, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ProductProps = {
  params: {
    name: string;
    image: string;
    description?: string;
    price?: string;
    category?: string;
    isNew?: boolean;
    discount?: number;
  };
  key: number;
};

export default function ProductCard({ params, key }: ProductProps) {
  const { image, name, description, price, category, isNew, discount } = params;

  return (
    <Card className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-square overflow-hidden">
          {/* Main product image with zoom effect */}
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
            <div className="absolute top-3 right-3 flex flex-col gap-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
              <button className="bg-white rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-colors duration-200">
                <Heart size={18} className="transition-colors" />
              </button>
              <button className="bg-white rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-colors duration-200">
                <Info size={18} className="transition-colors" />
              </button>
            </div>
          </div>

          {/* Tags */}
          {/* <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">
                NEW
              </span>
            )}
            {discount && (
              <span className="bg-destructive text-white text-xs font-medium px-2.5 py-1 rounded">
                -{discount}%
              </span>
            )}
          </div> */}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        {/* Category */}
        <p className="text-xs text-muted-foreground mb-1">{category}</p>

        {/* Product Title */}
        <CardTitle className="text-lg font-semibold line-clamp-1 mb-1">
          {name}
        </CardTitle>

        {/* Description */}
        {/* <CardDescription className="text-sm line-clamp-2 mb-3">
          {description}
        </CardDescription> */}
      </CardContent>

      <Separator />

      <CardFooter className="p-4 grid grid-cols-2 gap-2">
        <Button
          size="sm"
          variant="default"
          className="w-full transition-all duration-200 hover:shadow-lg"
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </Button>
        <Link href="/" className="w-full">
          <Button
            size="sm"
            variant="outline"
            className="w-full transition-all duration-200 hover:shadow-lg"
          >
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

// import React from "react";
// import { Heart, Info, ShoppingCart } from "lucide-react";

// interface ProductProps {
//   image: string;
//   name: string;
//   description?: string;
//   price?: string;
//   category?: string;
//   isNew?: boolean;
//   discount?: number;
// }

// export default function ProductCard({
//   image,
//   name,
//   description,
//   price,
//   category,
//   isNew,
//   discount,
// }: ProductProps) {
//   return (
//     <div className="group relative rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl border border-gray-200">
//       <div className="p-0">
//         <div className="relative w-full aspect-square overflow-hidden">
//           {/* Main product image with zoom effect */}
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//             loading="lazy"
//           />

//           {/* Overlay with actions */}
//           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
//             <div className="absolute top-3 right-3 flex flex-col gap-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
//               <button className="bg-white rounded-full p-2 shadow-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200">
//                 <Heart size={18} className="transition-colors" />
//               </button>
//               <button className="bg-white rounded-full p-2 shadow-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200">
//                 <Info size={18} className="transition-colors" />
//               </button>
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="absolute top-3 left-3 flex flex-col gap-2">
//             {isNew && (
//               <span className="bg-indigo-600 text-white text-xs font-medium px-2.5 py-1 rounded">
//                 NEW
//               </span>
//             )}
//             {discount && (
//               <span className="bg-red-600 text-white text-xs font-medium px-2.5 py-1 rounded">
//                 -{discount}%
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="p-4">
//         {/* Category */}
//         <p className="text-xs text-gray-500 mb-1">{category}</p>

//         {/* Product Title */}
//         <h3 className="text-lg font-semibold truncate mb-1 text-gray-900">
//           {name}
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>

//         {/* Price */}
//         {price && (
//           <p className="text-lg font-bold text-gray-900 mb-3">{price}</p>
//         )}
//       </div>

//       <div className="h-px bg-gray-200" />

//       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
//         <button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg text-sm font-medium">
//           <ShoppingCart size={16} />
//           Add to Cart
//         </button>
//         <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg transition-all duration-200 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg text-sm font-medium">
//           Details
//         </button>
//       </div>
//     </div>
//   );
// }
