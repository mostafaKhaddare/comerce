import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetFooter,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideIcon, Menu } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import ButtonsWithBadge from "../../ButtonWithBadge";
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
  Smile,
} from "lucide-react";
import Image from "next/image";
const staticMenu = [
  { name: "about us", href: "/about" },
  { name: "contact us", href: "/contact" },
];

const categories = [
  {
    name: "Lighting",
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
const subcategories = categories.flatMap((category) => category.subcategories);

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <ButtonsWithBadge iconName="menu" hasSpane={false} />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col gap-7 w-full overflow-auto"
      >
        <div className="bg-white flex flex-col gap-8">
          <SheetHeader className="flex-col gap-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-3  ">
                <Logo />
              </Link>
              <SheetClose>
                <ButtonsWithBadge iconName="close" hasSpane={false} />
              </SheetClose>
            </div>
            <SheetTitle className="text-2xl font-bold text-left">
              Shop
            </SheetTitle>
            {/* mobile nav search */}
            <Search />
          </SheetHeader>
          <Tabs defaultValue="Lighting" className="w-full">
            <TabsList className="w-full flex gap-2  py-7 px-6 ">
              {categories.map((item) => (
                <TabsTrigger className="text-lg font-bold" value={item.name}>
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((item) => (
              <TabsContent
                value={item.name}
                className="h3-bold overflow-hidden "
              >
                <Accordion
                  type="single"
                  collapsible
                  className="max-w-lg my-4 w-full "
                >
                  {item.subcategories.map((it, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="py-6 list-none">
                        <div className="flex justify-between items-center gap-3">
                          <Image
                            className="rounded-md "
                            src="/hero2.jpg"
                            width={50}
                            height={70}
                            alt="category img"
                            quality={100}
                          />
                          {it.name}
                        </div>
                      </AccordionTrigger>
                      {it.items.map((i, index) => (
                        <AccordionContent className="max-w-lg w-full text-light400_light500 base-medium pb-0 group cursor-pointer my-2 ">
                          <Link href="/" className=" group-hover:text-black">
                            {i.name}
                          </Link>
                          {index < it.items.length - 1 && (
                            <Separator className="my-4" />
                          )}
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
          <SheetFooter>footer</SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
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
          <props.icon className="mb-4 h-6 w-6" />
          <div className="text-sm font-semibold leading-none">{title}</div>{" "}
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
