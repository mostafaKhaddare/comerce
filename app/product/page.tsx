"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Heart, ChevronDown } from "lucide-react";
import Container from "@/components/shared/layout/Container";
import Section from "@/components/shared/layout/Section";
export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/assets/images/rubanled.png",
    "/assets/images/rubanled.png",
    "/assets/images/rubanled.png",
    "/assets/images/rubanled.png",
    "/assets/images/rubanled.png",
  ];

  const specifications = [
    { label: "Control Protocol", value: "DMX512/RDM" },
    { label: "Channels", value: "4/8/16" },
    { label: "Power Supply", value: "DC 12-24V" },
    { label: "Max Load", value: "5A per Channel" },
    { label: "Dimensions", value: "178x146x35mm" },
  ];

  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Images */}
          <div className="flex-1 space-y-4">
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-muted/10">
              <Image
                src={images[selectedImage]}
                alt="LED Controller"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {images.map((image, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all ${
                    selectedImage === index
                      ? "ring-2 ring-primary"
                      : "hover:ring-2 hover:ring-primary/50"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <CardContent className="relative aspect-square p-0">
                    <Image
                      src={image}
                      alt={`LED Controller view ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <Badge className="bg-primary/10 text-primary">New Release</Badge>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Pro LED Controller X1</h1>
              <p className="text-muted-foreground">
                Professional DMX512 LED Controller
              </p>
            </div>

            {/* <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">$299.99</span>
                <span className="text-lg text-muted-foreground line-through">
                  $399.99
                </span>
              </div>
              <Badge variant="secondary" className="text-primary">
                25% off
              </Badge>
            </div> */}

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.8 (120 reviews)
              </span>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="features">
                <AccordionTrigger>Features</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Advanced DMX512/RDM protocol support</li>
                    <li>Multiple channel configurations</li>
                    <li>Wireless control via smartphone app</li>
                    <li>Scene memory storage</li>
                    <li>Professional-grade aluminum housing</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specifications">
                <AccordionTrigger>Specifications</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index}>
                        <dt className="text-sm text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd className="font-medium">{spec.value}</dd>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Free shipping on orders over $500. 30-day return policy for
                    unopened items. Professional installation available in
                    select areas.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="space-y-4 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Choose Configuration
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="w-full">
                  4 Channel
                </Button>
                <Button variant="outline" className="w-full">
                  8 Channel
                </Button>
                <Button variant="outline" className="w-full">
                  16 Channel
                </Button>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Button className="flex-1" size="lg">
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-12 flex items-center justify-center"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="secondary" size="lg" className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Product Sheet
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
