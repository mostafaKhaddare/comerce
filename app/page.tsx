import Hero from "@/components/home/Hero";
import CarouselSection from "@/components/shared/sections/CarouselSection";
import AboutSection from "@/components/shared/sections/AboutSection";
import FeatursSection from "@/components/shared/sections/FeatursSection";
import PartnersSection from "@/components/shared/sections/PartnersSection";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Rocket } from "lucide-react";
import Carousel from "@/components/Carousel";

export default function Home() {
  const categories = [
    { name: "ruban led", image: "/assets/images/rubanled.png" },
    { name: "profile", image: "/assets/images/profile.png" },
    { name: "controller", image: "/assets/images/controller.png" },
    { name: "ampoule", image: "/assets/images/ampoule.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
  ];
  const Products = [
    {
      name: "ruban led 1 ",
      image: "/assets/images/rubanled.png",
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality.",
      price: "$299.99",
      category: "Electronics",
      isNew: true,
      discount: 10,
    },
    {
      name: "profile 2 ",
      image: "/assets/images/rubanled.png",
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality.",
      price: "$299.99",
      category: "Electronics",
      isNew: true,
      discount: 10,
    },
    {
      name: "controller 3",
      image: "/assets/images/rubanled.png",
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality.",
      price: "$299.99",
      category: "Electronics",
      isNew: true,
      discount: 10,
    },
    {
      name: "ampoule",
      image: "/assets/images/rubanled.png",
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality.",
      price: "$299.99",
      category: "Electronics",
      isNew: true,
      discount: 10,
    },
    {
      name: "Accessories",
      image: "/assets/images/rubanled.png",
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality.",
      price: "$299.99",
      category: "Electronics",
      isNew: true,
      discount: 10,
    },
    {
      name: "Accessories",
      image: "/assets/images/rubanled.png",
      description:
        "High-quality wireless headphones with noise cancellation and premium sound quality.",
      price: "$299.99",
      category: "Electronics",
      isNew: true,
      discount: 10,
    },
  ];
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&h=400&fit=crop",
    },
  ];
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passion",
      description:
        "We pour our hearts into every project, driven by genuine enthusiasm for innovation.",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Expertise",
      description:
        "Our team brings deep knowledge and experience to solve complex challenges.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description:
        "We constantly push boundaries to create cutting-edge solutions.",
    },
  ];

  return (
    <>
      <Carousel />
      <CarouselSection
        title="Lighting Categories"
        data={categories}
        type="category"
        className=" basis-1/3 md:basis-1/5"
      />
      <AboutSection />
      <CarouselSection
        title="Luminaite Catgories"
        data={categories}
        type="category"
        className=" basis-1/3 md:basis-1/5"
      />
      <CarouselSection
        title="Our Best Products"
        data={Products}
        type="product"
        className="basis-1/2  md:basis-1/4 lg:basis-1/4"
      />
      <FeatursSection />
      <PartnersSection />
    </>
  );
}
