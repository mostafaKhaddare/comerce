"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Cart from "../../Cart";
import MobileSearch from "@/components/MobileSearch";
import WishList from "../../WishList";
import Account from "../../Account";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import TopNavbar from "./TopNavbar";
import { ModeToggle } from "../../ModeToggle";
import MobileNav from "./MobileNav";
import Search from "@/components/Search";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Container from "../layout/Container";

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="overflow-auto ">
      <NavigationMenuLink className="overflow-auto" asChild>
        <a
          ref={ref}
          className={cn(
            "overflow-auto  block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="scroll-m-20 text-base font-semibold tracking-tight ">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const categories = [
    {
      name: "Lighting",
      subcategories: [
        {
          name: "Ruban LED",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
            { id: 2, name: "smd led" },
            { id: 2, name: "smd led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Profile",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Transform",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Fiber Optic",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
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
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Flood Lights",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "High Bay",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Flood Lights",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "High Bay",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Flood Lights",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
      ],
    },

    {
      name: "luminaire",
      subcategories: [
        {
          name: "High Bay",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Flood Lights",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Flood Lights",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Flood Lights",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
        {
          name: "Flood Lights",
          items: [
            { id: 0, name: "Ruban 220" },
            { id: 1, name: "cob led" },
            { id: 2, name: "smd led" },
          ],
        },
      ],
    },
  ];

  const staticMenu = [
    { name: "about us", href: "/about" },
    { name: "contact us", href: "/contact" },
  ];

  return (
    <>
      <TopNavbar />
      <nav className="relative border-b  bg-white dark:bg-dark200 w-full gap-5 p-4 shadow-light-300 dark:shadow-none sm:px-12">
        <Container>
          <div className="flex justify-between items-center max-w-screen">
            {/* mobile */}
            <div className="hidden max-sm:flex  max-sm:gap-2 gap-3 ">
              <MobileNav />
              <MobileSearch />
            </div>
            {/* logo */}
            <Logo />
            {/* navigation with static and categories link*/}
            <NavigationMenu className="z-[50]  max-sm:hidden md:hidden lg:flex ">
              <NavigationMenuList>
                {/* home link = */}
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} capitalize `}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* categories links */}
                {categories.map((item) => (
                  <div>
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="capitalize bg-accent">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="overflow-auto z-50">
                        {/* Horizontal scrolling container */}
                        <div className="flex space-x-6 overflow-x-auto px-6 py-4 w-screen  scrollbar-hide">
                          {item.subcategories.map((subcategory, index) => (
                            <ul
                              key={index}
                              className="flex-shrink-0 w-[350px] space-y-4"
                            >
                              {/* Subcategory Title */}
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <Link
                                    className="flex flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                                    href="/"
                                  >
                                    <div className="mt-4 text-xl font-semibold tracking-tight">
                                      {subcategory.name}
                                    </div>
                                    <p className="leading-6 mt-2 text-sm text-muted-foreground">
                                      Beautifully designed components that you
                                      can copy and paste into your apps.
                                      Accessible. Customizable. Open Source.
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>

                              {/* Items inside the subcategory */}
                              <div className="max-h-[17rem] overflow-y-auto space-y-2">
                                {subcategory.items.map((list, index) => (
                                  <ListItem
                                    key={index}
                                    href="/"
                                    title={list.name}
                                  >
                                    Re-usable components built using Radix UI
                                    and Tailwind CSS.
                                  </ListItem>
                                ))}
                              </div>
                            </ul>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </div>
                ))}
                {staticMenu.map((menu) => (
                  <NavigationMenuItem>
                    <Link href={menu.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()}  `}
                      >
                        {menu.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {/* Right Division */}

            <div className="flex items-center max-sm:gap-2 gap-3">
              {/* search */}
              <div className="max-sm:hidden md:flex">
                <Search />
              </div>
              {/* wishlist */}
              <div className="max-sm:hidden">
                <WishList />
              </div>

              {/* account */}
              <Account />
              {/* cart */}
              <Cart />
              {/* mode toggle */}
              {/* <div className="max-sm:hidden">
              <ModeToggle />
            </div> */}
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
