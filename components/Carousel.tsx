"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Play,
  Building2,
} from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Advanced Lighting Control",
    subtitle: "New LED Solutions",
    description:
      "Experience the future of lighting with our advanced LED control systems. Perfect for both residential and commercial applications.",
    image:
      "https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?auto=format&fit=crop&q=80",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    title: "Smart Home Integration",
    subtitle: "Wireless Control",
    description:
      "Seamlessly integrate your lighting system with smart home devices for ultimate convenience and control.",
    image:
      "https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80",
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "Energy Efficient Solutions",
    subtitle: "Eco-Friendly Lighting",
    description:
      "Reduce your carbon footprint with our energy-efficient LED solutions while maintaining optimal brightness.",
    image:
      "https://images.unsplash.com/photo-1532715088550-62f09305f765?auto=format&fit=crop&q=80",
    buttonText: "Discover",
  },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      skipSnaps: false,
      align: "center",
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative bg-gray-900">
      <div className="relative overflow-hidden z-20" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 z-40"
            >
              <div className="relative h-[75vh] w-full z-30">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />

                <div className="absolute inset-0 ">
                  <div className="container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl">
                      <span className="inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-600/20">
                        {slide.subtitle}
                      </span>

                      <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                        {slide.title}
                      </h1>

                      <p className="mt-6 text-lg leading-8 text-gray-300">
                        {slide.description}
                      </p>

                      <div className="mt-10 flex flex-wrap items-center gap-4">
                        <button
                          className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2 group transition-all duration-300"
                          onClick={() => console.log("Shop action")}
                        >
                          {slide.buttonText}
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>

                        <button
                          className="rounded-full bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 flex items-center gap-2 group transition-all duration-300"
                          onClick={() => console.log("B2B Portal action")}
                        >
                          <Building2 className="w-4 h-4" />
                          B2B Portal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute z-30 flex items-center justify-between w-full top-1/2 -translate-y-1/2 px-4">
        <button
          onClick={scrollPrev}
          className="rounded-full p-3 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          className="rounded-full p-3 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/55 to-gray-900/40" />
    </div>
  );
}
