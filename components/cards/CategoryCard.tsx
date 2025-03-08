import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight, Shapes, ShoppingCart } from "lucide-react";
import React from "react";

const CategoryCard = () => {
  return (
    <Card className="w-72 rounded-2xl shadow-lg p-4">
      <CardHeader>
        <img
          src="https://via.placeholder.com/300"
          alt="Category"
          className="w-full h-40 object-cover rounded-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-semibold">Category Name</CardTitle>
        <p className="text-sm text-gray-500 mb-4">
          Short description of the category goes here.
        </p>
        <Button className="w-full flex items-center gap-2">
          <ShoppingCart size={16} /> Explore
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
