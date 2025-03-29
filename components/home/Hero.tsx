"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import Container from "../shared/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();

  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const slides = [
    {
      id: 0,
      name: "led strip control",
      image:
        "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg",
      title: "Advanced Lighting Control & LED Management",
      subTitle: "New LED Control Solutions!",
      buttonAction: "Shop Now",
    },
    {
      id: 1,
      name: "smart lighting system",
      image:
        "https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg",
      title: "Smart Fiber Optic Solutions",
      subTitle: "Revolutionary Fiber Technology",
      buttonAction: "Learn More",
    },
    {
      id: 2,
      name: "dmx controller",
      image:
        "https://images.pexels.com/photos/1042148/pexels-photo-1042148.jpeg",
      title: "Professional LED Controllers",
      subTitle: "Premium Control Systems",
      buttonAction: "Explore",
    },
    {
      id: 3,
      name: "integrated lighting",
      image:
        "https://images.pexels.com/photos/2098913/pexels-photo-2098913.jpeg",
      title: "Integrated Lighting Systems",
      subTitle: "Complete Lighting Solutions",
      buttonAction: "Get Started",
    },
  ];

  return (
    <div className="sm:min-h-[60vh] md:min-h-[80vh] flex items-start mt-4 md:mt-8 justify-start md:items-center md:justify-center">
      <Container className="w-full grid lg:grid-cols-2 lg:gap-8">
        <div className="hidden md:block py-14 md:py-0">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            New LED Control Solutions!
          </Badge>
          <h1 className="mt-6 max-w-[17ch] h1-bold">
            Advanced Lighting Control & LED Management
          </h1>
          <p className="mt-6 max-w-[60ch] paragraph">
            Discover cutting-edge solutions for controlling LED systems,
            including DMX, DALI, Zigbee, and more. Optimize your lighting
            projects with seamless, efficient, and flexible control options.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="text-base rounded-full">
              Shop Now <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="mr-2 h-5 w-5" /> Watch video
            </Button>
          </div>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="overflow-hidden rounded-xl"
          >
            <CarouselContent className="h-[60vh]">
              {slides.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="rounded-xl w-full h-full border-none">
                    <CardContent className="relative w-full h-full rounded-xl md:aspect-video p-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Enhanced Gradient Overlay with stronger opacity */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 rounded-xl" />

                      {/* Content Overlay - Visible on all devices */}
                      <div className="absolute z-30 left-6 md:left-12 bottom-10 md:bottom-16 space-y-4 max-w-[80%] md:max-w-[60%]">
                        <Badge className="bg-white text-primary rounded-full py-1.5 px-4 border-none shadow-lg font-medium">
                          {item.subTitle}
                        </Badge>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                          {item.title}
                        </h1>
                        <p className="text-white text-sm md:text-base max-w-[90%] md:max-w-[80%] drop-shadow-md">
                          Discover cutting-edge solutions for controlling LED
                          systems, including DMX, DALI, Zigbee, and more.
                          Optimize your lighting projects with seamless,
                          efficient, and flexible control options.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button
                            size="lg"
                            className="rounded-full bg-white text-primary hover:bg-white/90 shadow-lg"
                          >
                            {item.buttonAction}
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full text-white border-white hover:bg-white/10 shadow-lg"
                          >
                            <CirclePlay className="mr-2 h-4 w-4" /> Watch video
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    current === index
                      ? "bg-white w-4"
                      : "bg-white/50 hover:bg-white/70"
                  )}
                />
              ))}
            </div>

            <div className="hidden lg:block">
              <CarouselPrevious className="hidden absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm" />
            </div>
          </Carousel>
        </div>
      </Container>
    </div>
  );
}
