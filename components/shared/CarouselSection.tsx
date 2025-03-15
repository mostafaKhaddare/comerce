"use client";
import Section from "./Section";
import Title from "./Title";
import Container from "./Container";
import CategoryCard from "../cards/CategoryCard";
import ProductCard from "../cards/ProductCard";

import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "../ui/carousel";

export default function CarouselSection({ title, data, type, className }: any) {
  // Determine the correct card to render
  const renderCard = (item: any) => {
    switch (type) {
      case "category":
        return <CategoryCard key={item} params={item} />;
      case "product":
        return <ProductCard key={item} params={item} />;

      default:
        return <div>Unknown Type</div>;
    }
  };
  return (
    <Section>
      <Container>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full  "
        >
          <div className="flex justify-between items-center mb-6">
            <Title className="md:mb-0 ">{title}</Title>
            <div className="hidden md:flex justify-center items-center absolute   right-8">
              <CarouselPrevious className="right-8 md:h-10 md:w-10" />
              <CarouselNext className="    md:h-10 md:w-10" />
            </div>
          </div>
          <CarouselContent className="overflow-auto scrollbar-custom ">
            {data.map((item: any, index: number) => (
              <CarouselItem key={index} className={`pr-0 md:pr-4 ${className}`}>
                {renderCard(item)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </Section>
  );
}

{
  /* {categories.map((category, index) => (
              <CarouselItem key={index} className=" basis-1/3 md:basis-1/4 ">
                <CategoryCard key={index} params={category} />
              </CarouselItem>
            ))} */
}
