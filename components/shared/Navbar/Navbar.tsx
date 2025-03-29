"use client";

import { cn } from "@/lib/utils";
import React, { useMemo } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Cart from "../../Cart";
import MobileSearch from "@/components/MobileSearch";
import WishList from "../../WishList";
import Account from "../../Account";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import TopNavbar from "./TopNavbar";
import MobileNav from "./MobileNav";
import Search from "@/components/Search";
import Image from "next/image";
import {
  Lightbulb,
  Sparkles,
  ArrowRight,
  Cable,
  Gamepad,
  Lamp,
  RadioTower,
  Wrench,
  Power,
  Gauge,
  Boxes,
  Workflow,
  Binary,
  Settings,
  Zap,
  Timer,
  Wifi,
  Plus,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Container from "../layout/Container";

// Memoized ListItem component for better performance

const ListItem = React.memo(
  React.forwardRef<
    React.ComponentRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li role="menuitem">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "select-none rounded-md p-3 no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-3 group",
              className
            )}
            aria-label={title}
            {...props}
          >
            <div className="flex items-center gap-2.5 flex-1">
              <Sparkles className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              <div className="text-[15px] font-medium leading-relaxed tracking-tight">
                {title}
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5" />
          </a>
        </NavigationMenuLink>
      </li>
    );
  })
);
ListItem.displayName = "ListItem";

// Memoized SubcategoryCard component
const SubcategoryCard = React.memo(
  ({ subcategory, items }: { subcategory: any; items: any[] }) => (
    <ul className="flex-shrink-0 w-[320px] space-y-4" role="menu">
      <li className="row-span-3">
        <NavigationMenuLink className="w-full h-52 block" asChild>
          <Link
            className="group relative flex flex-col justify-end rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg"
            href="/"
            aria-label={`View ${subcategory.name} category`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-6 left-6 z-20 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
              <h3 className="scroll-m-20 text-xl tracking-tight text-white">
                {subcategory.name}
              </h3>
              <p className="text-sm text-white/90 leading-7">
                {items.length} products
              </p>
            </div>
            <Image
              src={subcategory.image}
              alt={subcategory.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 320px"
              priority={false}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/assets/images/fallback.jpg"; // Add a fallback image
              }}
            />
          </Link>
        </NavigationMenuLink>
      </li>
      <div className="max-h-[280px] space-y-2.5 scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent">
        {items.slice(0, 4).map((list, index) => (
          <ListItem
            key={index}
            href="/"
            title={list.name}
            className="hover:bg-accent/5 transition-all duration-300 hover:translate-x-1 group leading-7"
          />
        ))}
        {items.length > 4 && (
          <Link
            href={`/categories/${subcategory.name.toLowerCase()}`}
            className="group mt-2 flex items-center justify-between rounded-md p-3 bg-accent/5 hover:bg-accent/10 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                <Plus className="w-2.5 h-2.5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                View all {items.length - 6} more
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-primary/70 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
          </Link>
        )}
      </div>
    </ul>
  )
);
SubcategoryCard.displayName = "SubcategoryCard";

const Navbar = () => {
  const categories = useMemo(
    () => [
      {
        name: "Lighting",
        subcategories: [
          {
            name: "Ruban LED",
            image:
              "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=800",
            items: [
              { id: 1, name: "Ruban LED 220V", icon: Power },
              { id: 2, name: "Ruban LED COB", icon: Cable },
              { id: 3, name: "Ruban LED SMD", icon: Cable },
              { id: 4, name: "Ruban LED Addressable", icon: Gamepad },
              { id: 5, name: "Ruban LED RGBW/RGBWW", icon: Settings },
              { id: 6, name: "Ruban LED CCT", icon: Timer },
            ],
          },
          {
            name: "Profile LED",
            image:
              "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=800",
            items: [
              { id: 1, name: "Profile LED Apparent", icon: Boxes },
              { id: 2, name: "Profile LED Encastré", icon: Boxes },
              { id: 3, name: "Profile LED Suspendu", icon: Boxes },
              { id: 4, name: "Profile LED Coin", icon: Boxes },
              { id: 5, name: "Profile LED Sol", icon: Boxes },
              { id: 6, name: "Profile LED Plâtre", icon: Boxes },
            ],
          },
          {
            name: "Controllers",
            image:
              "https://images.unsplash.com/photo-1597225244660-1cd128c64284?q=80&w=800",
            items: [
              { id: 1, name: "Controllers DMX", icon: Gamepad },
              { id: 2, name: "Controllers DALI", icon: Gamepad },
              { id: 3, name: "Controllers WiFi", icon: Wifi },
              { id: 4, name: "Controllers Bluetooth", icon: Gamepad },
              { id: 5, name: "Controllers RF", icon: RadioTower },
            ],
          },
          {
            name: "Fibre Optique",
            image:
              "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=800",
            items: [
              { id: 1, name: "Générateurs", icon: Power },
              { id: 2, name: "Câbles", icon: Cable },
              { id: 3, name: "Accessoires", icon: Wrench },
            ],
          },
          {
            name: "Ampoules LED",
            image:
              "https://images.unsplash.com/photo-1565865735449-7c3f2e9a1a52?q=80&w=800",
            items: [
              { id: 1, name: "Ampoules E27", icon: Lightbulb },
              { id: 2, name: "Ampoules GU10", icon: Lightbulb },
              { id: 3, name: "Ampoules E14", icon: Lightbulb },
            ],
          },
          {
            name: "Spots LED",
            image:
              "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=800",
            items: [
              { id: 1, name: "Spots Encastrés", icon: Lamp },
              { id: 2, name: "Spots Surface", icon: Lamp },
              { id: 3, name: "Spots Rail", icon: Lamp },
              { id: 4, name: "Spots Sol", icon: Lamp },
            ],
          },
        ],
      },
      {
        name: "Industrial",
        subcategories: [
          {
            name: "Automation",
            image:
              "https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?q=80&w=800",
            items: [
              { id: 1, name: "PLC Controllers", icon: Gamepad },
              { id: 2, name: "HMI Displays", icon: Workflow },
              { id: 3, name: "Sensors", icon: Gauge },
              { id: 4, name: "Actuators", icon: Power },
            ],
          },
          {
            name: "Communication",
            image:
              "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800",
            items: [
              { id: 1, name: "Industrial Ethernet", icon: Cable },
              { id: 2, name: "Wireless Systems", icon: RadioTower },
              { id: 3, name: "Fieldbus Systems", icon: Binary },
            ],
          },
          {
            name: "Power Systems",
            image:
              "https://images.unsplash.com/photo-1609344349725-143cb1459e2e?q=80&w=800",
            items: [
              { id: 1, name: "Power Supplies", icon: Power },
              { id: 2, name: "UPS Systems", icon: Zap },
              { id: 3, name: "Battery Systems", icon: Power },
            ],
          },
          {
            name: "Control Systems",
            image:
              "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
            items: [
              { id: 1, name: "Process Controllers", icon: Gamepad },
              { id: 2, name: "Temperature Controllers", icon: Gauge },
              { id: 3, name: "Motion Controllers", icon: Workflow },
            ],
          },
          {
            name: "Control Systems",
            image:
              "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
            items: [
              { id: 1, name: "Process Controllers", icon: Gamepad },
              { id: 2, name: "Temperature Controllers", icon: Gauge },
              { id: 3, name: "Motion Controllers", icon: Workflow },
            ],
          },
          {
            name: "Control Systems",
            image:
              "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
            items: [
              { id: 1, name: "Process Controllers", icon: Gamepad },
              { id: 2, name: "Temperature Controllers", icon: Gauge },
              { id: 3, name: "Motion Controllers", icon: Workflow },
            ],
          },
          {
            name: "Control Systems",
            image:
              "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
            items: [
              { id: 1, name: "Process Controllers", icon: Gamepad },
              { id: 2, name: "Temperature Controllers", icon: Gauge },
              { id: 3, name: "Motion Controllers", icon: Workflow },
            ],
          },
        ],
      },
    ],
    []
  );

  const staticMenu = useMemo(
    () => [
      { name: "about us", href: "/about" },
      { name: "contact us", href: "/contact" },
    ],
    []
  );

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopNavbar />
      <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm dark:bg-dark200/95 w-full py-4 px-4 shadow-sm dark:shadow-none sm:px-12 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:via-accent/5 before:to-primary/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10">
        <Container className="max-xs:px-0">
          <div className="flex justify-between items-center w-full">
            {/* Mobile Navigation */}
            <div className="flex lg:hidden gap-4">
              <MobileNav />
              <MobileSearch />
            </div>

            <Logo />

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-accent hover:text-accent-foreground leading-7 tracking-tight transition-all duration-200"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {categories.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    <NavigationMenuTrigger className="capitalize bg-transparent hover:bg-accent hover:text-accent-foreground leading-7 tracking-tight transition-all duration-200">
                      {category.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-screen">
                        <div className="relative">
                          <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent px-8 py-8 gap-6">
                            {category.subcategories
                              .slice(0, 6)
                              .map((subcategory) => (
                                <SubcategoryCard
                                  key={subcategory.name}
                                  subcategory={subcategory}
                                  items={subcategory.items}
                                />
                              ))}
                            {category.subcategories.length > 4 && (
                              <div className="flex-shrink-0 w-[320px] min-w-[320px]">
                                <Link
                                  href={`/categories/${category.name.toLowerCase()}`}
                                  className="group h-52 rounded-lg bg-accent/5 dark:bg-accent/10 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-accent/10 dark:hover:bg-accent/20"
                                >
                                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <ArrowRight className="w-8 h-8 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                                  </div>
                                  <div className="text-center">
                                    <h3 className="text-2xl font-semibold tracking-tight mb-2">
                                      See All
                                    </h3>
                                    <p className="text-sm font-medium text-muted-foreground">
                                      View all {category.subcategories.length}{" "}
                                      subcategories
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {staticMenu.map((menu) => (
                  <NavigationMenuItem key={menu.name}>
                    <Link href={menu.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-accent hover:text-accent-foreground leading-7 tracking-tight transition-all duration-200"
                        )}
                      >
                        {menu.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex">
                <Search />
              </div>
              <div className="max-sm:hidden">
                <WishList />
              </div>
              <Account />
              <Cart />
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default React.memo(Navbar);
