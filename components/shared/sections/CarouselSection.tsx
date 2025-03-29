"use client";
import Section from "../layout/Section";
import Title from "../layout/Title";
import Container from "../layout/Container";
import CategoryCard from "@/components/cards/CategoryCard";
import ProductCard from "@/components/cards/ProductCard";

import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";

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
      <Container className="overflow-visible">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full overflow-visible"
        >
          <div className="flex justify-between items-center mb-6">
            <Title className="md:mb-0 ">{title}</Title>
            <div className="hidden md:flex justify-center items-center absolute right-8">
              <CarouselPrevious className="right-8 md:h-10 md:w-10" />
              <CarouselNext className="md:h-10 md:w-10" />
            </div>
          </div>
          <div className="overflow-visible">
            <CarouselContent className="pb-6 overflow-visible">
              {data.map((item: any, index: number) => (
                <CarouselItem
                  key={index}
                  className={`pr-0 md:pr-4 ${className}`}
                >
                  {renderCard(item)}
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </Container>
    </Section>
  );
}
