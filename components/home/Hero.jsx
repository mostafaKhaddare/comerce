"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "../ui/badge";
import { ArrowUpRight } from "lucide-react";
import { CirclePlay } from "lucide-react";
import { title } from "process";
const Hero = () => {
  const heroData = [
    {
      title: "Elevate Your Training",
      paragraph:
        "Premium performance apparel engineered for the relentless pursuit of progress.",
      moveToAction: "show now",
      img: "/hero.jpg",
      alt: "",
    },
    {
      title: "ruban led",
      paragraph: "we have a best quality the fit your need.",
      moveToAction: "explore ruban led",
      img: "/hero.jpg",
      alt: "",
    },
    {
      title: "ruban led",
      paragraph: "we have a best quality the fit your need.",
      moveToAction: "explore ruban led",
      img: "/hero.jpg",
      alt: "",
    },
  ];

  return (
    // <section className="bg-white">
    //   <div class="relative overflow-hidden">
    //     <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    //       <div class="max-w-2xl text-center mx-auto">
    //         <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
    //           Designed for you to get more{" "}
    //           <span class="text-blue-600">simple</span>
    //         </h1>
    //         <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">
    //           Build your business here. Take it anywhere.
    //         </p>
    //       </div>

    //       <div class="mt-10 relative max-w-5xl mx-auto">
    //         <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

    //         <div class="absolute inset-0 size-full">
    //           <div class="flex flex-col justify-center items-center size-full">
    //             <a
    //               class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
    //               href="#"
    //             >
    //               <svg
    //                 class="shrink-0 size-4"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               >
    //                 <polygon points="5 3 19 12 5 21 5 3" />
    //               </svg>
    //               Play the overview
    //             </a>
    //           </div>
    //         </div>

    //         <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
    //           <div class="bg-white size-48 rounded-lg dark:bg-neutral-900"></div>
    //         </div>

    //         <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
    //           <div class="bg-white size-48 rounded-full dark:bg-neutral-900"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <section>
        {/* Hero Content */}
        <Carousel className="w-full">
          <CarouselContent>
            {heroData.map((data) => (
              <CarouselItem key={data.title}>
                <div className="container mx-10 ">
                  <div className=" mx-auto flex min-h-[calc(100vh-80px)] max-sm:min-h-[50vh] items-center px-4 sm:px-6">
                    <div className="relative z-10 max-w-2xl space-y-6">
                      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                        {data.title}
                      </h1>
                      <p className="text-lg text-gray-300 md:text-xl">
                        {data.paragraph}
                      </p>
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <Button size="lg" asChild>
                          <Link
                            href="/shop"
                            className="transition-transform duration-300 hover:scale-105"
                          >
                            {data.moveToAction}
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={data.img}
                        alt={data.alt}
                        fill
                        priority
                        className="object-cover object-center opacity-60"
                        quality={100}
                      />
                      {/* Base Image */}

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/15 z-10" />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent z-20" />
                    </div>
                  </div>
                  {/* Background Image */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1/2 bottom-12 -translate-x-12" />
          <CarouselNext className="right-1/2  bottom-12 translate-x-8" />
        </Carousel>
      </section>
      <section>
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
            <div>
              <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                <svg
                  class="shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="10" height="14" x="3" y="8" rx="2" />
                  <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                  <path d="M8 18h.01" />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  Responsive
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400">
                  Responsive, and mobile-first project on the web
                </p>
              </div>
            </div>

            <div>
              <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                <svg
                  class="shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  Customizable
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400">
                  Components are easily customized and extendable
                </p>
              </div>
            </div>

            <div>
              <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                <svg
                  class="shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  Documentation
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400">
                  Every component and plugin is well documented
                </p>
              </div>
            </div>

            <div>
              <div class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                <svg
                  class="shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  24/7 Support
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400">
                  Contact us 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

    // <div className=" relative min-h-screen max-sm:min-h-[70vh] flex items-center justify-center">
    //   <div className="relative max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
    //     <div>
    //       <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
    //         Just released v1.0.0
    //       </Badge>
    //       <h1 className="mt-6 max-w-[15ch] text-3xl lg:text-[2.75rem] xl:text-5xl font-black leading-[1.1] tracking-tight">
    //         Customized Shadcn UI Blocks & Components
    //       </h1>
    //       <p className="mt-6 max-w-[60ch] text-lg">
    //         Explore a collection of Shadcn UI blocks and components, ready to
    //         preview and copy. Streamline your development workflow with
    //         easy-to-implement examples.
    //       </p>
    //       <div className="mt-12 flex items-center gap-4">
    //         <Button size="lg" className="rounded-full text-base">
    //           Get Started <ArrowUpRight className="!h-5 !w-5" />
    //         </Button>
    //         <Button
    //           variant="outline"
    //           size="lg"
    //           className="rounded-full text-base shadow-none"
    //         >
    //           <CirclePlay className="!h-5 !w-5" /> Watch Demo
    //         </Button>
    //       </div>
    //     </div>
    //     <div className="w-full  max-sm:order-first aspect-video bg-white rounded-xl" />
    //   </div>
    // </div>
  );
};

export default Hero;
