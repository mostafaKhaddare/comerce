import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Heart } from "lucide-react";
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
    <Link href="/">
      <Card className="rounded-xl aspect-auto shadow-md p-4 pb-2 md:pb-4">
        <CardContent className="flex flex-col items-center pb-0 ">
          <div className="w-40 h-40 lg:w-[19rem] lg:h-80  relative ">
            <Image
              src={image} // Replace with your actual image path
              alt="Gaming Controller"
              layout="fill"
              objectFit="contain"
              className="w-full  rounded-md"
            />
            <Link
              href="/"
              className="absolute top-2 right-2 md:top-6 md:right-3 bg-accent rounded-full p-2"
            >
              <Heart size={20} strokeWidth={2} />
            </Link>
          </div>
        </CardContent>
        <CardHeader className=" text-center py-4 px-0 md:pl-0">
          <CardTitle className="scroll-m-20  text-sm md:text-xl font-semibold tracking-tight">
            Ruban 2835/120 IP20
          </CardTitle>
          <CardDescription>Ruban Led , Unicolor</CardDescription>
        </CardHeader>
        <Separator className=" mb-2 md:mb-4" />
        <CardFooter className="flex  justify-between items-center gap-1 md:gap-3 p-0">
          <Button
            size="icon"
            className="w-fit max-sm:flex-1 md:w-full bg-accent-blue tansition-all duration-300 hover:bg-accent-bleu"
          >
            commander
          </Button>
          <Button
            size="icon"
            className="w-fit max-sm:hidden md:w-full bg-accent-blue transition-all duration-300 hover:bg-blue-400"
          >
            discover
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
