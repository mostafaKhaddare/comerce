import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

type ProductProps = {
  params: {
    name: string;
    image: string;
    description?: string; // Add any extra props you might need
  };
  key: number; // Add any extra props you might need
};
export default function ProductCard({ params, key }: ProductProps) {
  const { image, name } = params;
  return (
    <Link className="" href="/">
      <Card className="rounded-xl shadow-md overflow-hidden">
        <CardContent className="p-0">
          {/* This div will always take full height */}
          <div className="relative w-full aspect-square">
            <Image
              src={image}
              alt="Ruban LED"
              layout="fill"
              objectFit="cover" // Fills the entire div
              className="absolute inset-0 w-full h-full" // Ensures full coverage
            />
            {/* Favorite icon */}
            <Link
              href="/"
              className="absolute top-3 right-3 bg-accent rounded-full p-2 shadow-md hover:scale-110 transition-transform"
            >
              <Heart size={15} strokeWidth={2} />
            </Link>
          </div>
        </CardContent>

        <CardHeader className="text-center p-2 md:p-4">
          <CardTitle className="text-base  md:text-xl font-semibold tracking-tight">
            Ruban 2835/120 IP20
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Ruban LED, Unicolor
          </CardDescription>
        </CardHeader>

        <Separator />

        <CardFooter className="flex justify-between items-center gap-2 p-4">
          <Button
            size="sm"
            className="w-full bg-accent-blue transition-all duration-300 hover:bg-blue-400"
          >
            Commander
          </Button>
          <Button
            size="sm"
            className="w-full bg-accent-blue transition-all duration-300 hover:bg-blue-400 hidden sm:flex"
          >
            Discover
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
