import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import ButtonWithBadge from "@/components/ButtonWithBadge";
import Search from "../../Search";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import React from "react";
import {
  LampDesk,
  Lightbulb,
  Backpack,
  CakeSlice,
  Coffee,
  Grape,
  Package,
  Pizza,
  Plane,
  Sandwich,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Card, CardTitle, CardContent } from "@/components/ui/card";

const staticMenu = [
  { name: "about us", href: "/about" },
  { name: "contact us", href: "/contact" },
];

const categories = [
  {
    name: "Lighting",
    images: [
      {
        id: 1,
        src: "/assets/images/transformateur-categorie-1.jpg",
        title: "look at range of lightinf goods",
      },
      {
        id: 2,
        src: "/assets/images/projecteur_categ.jpg ",
        title: "lighting solution our power consept",
      },
    ],
    subcategories: [
      {
        name: "Ruban LED",
        items: [
          { id: 0, name: "Ruban 220", icon: LampDesk },
          { id: 1, name: "cob led", icon: Lightbulb },
          { id: 2, name: "smd led", icon: Backpack },
          { id: 2, name: "smd led", icon: CakeSlice },
          { id: 2, name: "smd led", icon: Coffee },
          { id: 2, name: "smd led", icon: Grape },
        ],
      },
      {
        name: "Profile",
        items: [
          { id: 0, name: "apparent", icon: Package },
          { id: 1, name: "encastre", icon: Sandwich },
          { id: 2, name: "plastre", icon: LampDesk },
        ],
      },
      {
        name: "Transform",
        items: [
          { id: 0, name: "etacnhe", icon: Plane },
          { id: 1, name: "form tube", icon: LampDesk },
          { id: 2, name: "slim", icon: Pizza },
        ],
      },
      {
        name: "Fiber Optic",
        items: [
          { id: 0, name: "etanche", icon: LampDesk },
          { id: 1, name: "plastic", icon: LampDesk },
        ],
      },
    ],
  },
  {
    name: "Industrial",
    images: [
      {
        id: 1,
        src: "/assets/images/rubanled.png",
        title: "our best lumnaire shapes",
      },
      {
        id: 2,
        src: "/assets/images/spot_categori.jpg",
        title: "our best lumnaire shapes",
      },
    ],
    subcategories: [
      {
        name: "High Bay",
        items: [
          { id: 0, name: "Ruban 220", icon: LampDesk },
          { id: 1, name: "cob led", icon: LampDesk },
          { id: 2, name: "smd led", icon: LampDesk },
        ],
      },

      {
        name: "High Bay",
        items: [
          { id: 0, name: "Ruban 220", icon: LampDesk },
          { id: 1, name: "cob led", icon: LampDesk },
          { id: 2, name: "smd led", icon: LampDesk },
        ],
      },
      {
        name: "Flood Lights",
        items: [
          { id: 0, name: "Ruban 220", icon: LampDesk },
          { id: 1, name: "cob led", icon: LampDesk },
          { id: 2, name: "smd led", icon: LampDesk },
        ],
      },
      {
        name: "High Bay",
        items: [
          { id: 0, name: "Ruban 220", icon: LampDesk },
          { id: 1, name: "cob led", icon: LampDesk },
          { id: 2, name: "smd led", icon: LampDesk },
        ],
      },
      {
        name: "Flood Lights",
        items: [
          { id: 0, name: "Ruban 220", icon: LampDesk },
          { id: 1, name: "cob led", icon: LampDesk },
          { id: 2, name: "smd led", icon: LampDesk },
        ],
      },
      {
        name: "High Bay",
        items: [
          { id: 0, name: "Ruban 220", icon: LampDesk },
          { id: 1, name: "cob led", icon: LampDesk },
          { id: 2, name: "smd led", icon: LampDesk },
        ],
      },
      {
        name: "Flood Lights",
        items: [
          { id: 0, name: "Ruban 220", icon: LampDesk },
          { id: 1, name: "cob led", icon: LampDesk },
          { id: 2, name: "smd led", icon: LampDesk },
        ],
      },
    ],
  },

  {
    name: "luminaire",
    images: [
      {
        id: 1,
        src: "/assets/images/profile.png",
        title: "our best lumnaire shapes",
      },
      {
        id: 2,
        src: "/assets/images/projecteur_categ.jpg",
        title: "our best lumnaire shapes",
      },
    ],
    subcategories: [
      {
        name: "lineerer",
        items: [
          { id: 0, name: "Ruban 220" },
          { id: 1, name: "cob led" },
          { id: 2, name: "smd led" },
        ],
      },
      {
        name: "triangle",
        items: [
          { id: 0, name: "Ruban 220" },
          { id: 1, name: "cob led" },
          { id: 2, name: "smd led" },
        ],
      },
    ],
  },
];

const socialLinks = [
  { name: "Instagram", icon: "instagram" as const, href: "/" },
  { name: "Facebook", icon: "facebook" as const, href: "/" },
  { name: "YouTube", icon: "youtube" as const, href: "/" },
  { name: "Account", icon: "account" as const, href: "/" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <ButtonWithBadge iconName="menu" showBadge={false} />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col w-full overflow-auto">
        <div className="bg-white flex flex-col gap-6">
          <SheetHeader className="flex-col gap-5">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center">
                <Logo />
              </Link>
              <SheetClose>
                <ButtonWithBadge iconName="close" showBadge={false} />
              </SheetClose>
            </div>
            <SheetTitle className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
              Shop
            </SheetTitle>
            {/* mobile nav search */}
            <Search />
          </SheetHeader>

          <Tabs defaultValue={categories[0].name} className="w-full">
            <TabsList className="w-full flex justify-evenly items-center py-8">
              {categories.map((item) => (
                <TabsTrigger
                  key={item.name}
                  className="text-base font-medium leading-7 tracking-wide px-4 py-2 transition-all hover:text-primary"
                  value={item.name}
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((item) => (
              <TabsContent
                key={item.name}
                value={item.name}
                className="overflow-hidden"
              >
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {item.images.map((i) => (
                      <CarouselItem key={i.id}>
                        <Card className="w-full relative aspect-video text-center pt-4 overflow-hidden">
                          <CardContent>
                            <Image
                              src={i.src}
                              alt={i.title}
                              fill
                              className="object-cover transition-all hover:opacity-90 duration-500 hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20"></div>
                            <CardTitle className="text-xl tracking-tight font-bold absolute left-4 text-white bottom-2">
                              {i.title}
                            </CardTitle>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                <Accordion
                  type="single"
                  collapsible
                  className="max-w-lg w-full mt-4"
                >
                  {item.subcategories.map((it, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-b"
                    >
                      <AccordionTrigger className="py-4 list-none hover:no-underline">
                        <div className="flex justify-between items-center gap-4 group">
                          <Image
                            className="rounded-md aspect-square group-hover:scale-105 transition-transform duration-300"
                            src="/hero2.jpg"
                            width={40}
                            height={40}
                            alt="category img"
                            quality={100}
                          />
                          <h2 className="scroll-m-20 text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                            {it.name}
                          </h2>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4">
                        <div className="flex flex-col space-y-3">
                          {it.items.map((i, index) => (
                            <div
                              key={index}
                              className="relative overflow-hidden"
                            >
                              <Link
                                href="/"
                                className="group flex items-center gap-3 py-3 px-4 text-sm leading-7 rounded-md relative transition-all duration-300 ease-in-out hover:pl-6"
                              >
                                {"icon" in i && i.icon && (
                                  <i.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                )}
                                <span className="group-hover:text-primary transition-colors duration-300">
                                  {i.name}
                                </span>
                                <span className="absolute left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                <span className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </Link>
                              {index < it.items.length - 1 && (
                                <Separator className="my-1" />
                              )}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <SheetFooter className="flex flex-col gap-6 mt-auto border-t pt-6">
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors duration-200 bg-accent/10 rounded-lg p-3"
            >
              <MapPin className="w-4 h-4" />
              <span>Find our Store</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors duration-200 bg-accent/10 rounded-lg p-3"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Follow us on social media
            </p>
            <div className="flex justify-start items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="hover:text-primary transition-colors duration-200 bg-accent/10 p-2 rounded-full"
                >
                  <ButtonWithBadge
                    className="w-5 h-5"
                    showBadge={false}
                    iconName={social.icon}
                  />
                </Link>
              ))}
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

const ListItem = React.forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: LucideIcon }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <props.icon className="mb-4 h-8 w-8" />
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
