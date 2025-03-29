import Hero from "@/components/home/Hero";
import CarouselSection from "@/components/shared/sections/CarouselSection";
import AboutSection from "@/components/shared/sections/AboutSection";
import FeatursSection from "@/components/shared/sections/FeatursSection";
import PartnersSection from "@/components/shared/sections/PartnersSection";

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
    { name: "ruban led 1 ", image: "/assets/images/rubanled.png" },
    { name: "profile 2 ", image: "/assets/images/rubanled.png" },
    { name: "controller 3", image: "/assets/images/rubanled.png" },
    { name: "ampoule", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
  ];
  return (
    <>
      <Hero />
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
      <FeatursSection />
      <CarouselSection
        title="Our Best Products"
        data={Products}
        type="product"
        className="basis-1/2  md:basis-1/4 lg:basis-1/5"
      />
      <PartnersSection />
    </>
  );
}
