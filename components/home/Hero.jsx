"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import Container from "../shared/Container";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[50vh] md:min-h-[80vh] flex items-center justify-center">
      <Container className=" w-full  grid lg:grid-cols-2 gap-8">
        <div className="py-14 md:py-0">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            Just released v1.0.0
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-7xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
            Customized Shadcn UI Blocks & Components
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className=" text-base">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button> */}
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full "
        >
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="relative p-0">
                    <div className="relative aspect-video md:aspect-video ">
                      <Image
                        src="/assets/images/rubanled.png"
                        alt="ruban led"
                        fill
                        className="object-cover "
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="relative p-0">
                    <div className="relative aspect-video md:aspect-video ">
                      <Image
                        src="/assets/images/controller.png"
                        alt="ruban led"
                        fill
                        className="object-cover "
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="relative p-0">
                    <div className="relative aspect-video md:aspect-video">
                      <Image
                        src="/assets/images/profile.png"
                        alt="ruban led"
                        fill
                        className="object-cover "
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="absolute bottom-1/2 right-[-11px] translate-y-1/2" />
          <CarouselPrevious className="absolute bottom-1/2 left-[-11px] translate-y-1/2" />
        </Carousel>
      </Container>
    </div>
  );
};

export default Hero;
