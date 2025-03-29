import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/cards/ProductCard";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import Filter from "@/components/shared/Filter";
import { shopePageFilters } from "@/constants/filters";
import PaginationDemo from "@/components/shared/Pagination";
import Section from "@/components/shared/layout/Section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionHeader,
} from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CircleCheck, CircleX } from "lucide-react";
export default function ShopPage() {
  const colors = ["indigo", "rose", "sky", "green", "orange"];
  const products = [
    { name: "ruban led 1 ", image: "/assets/images/rubanled.png" },
    { name: "profile 2 ", image: "/assets/images/rubanled.png" },
    { name: "controller 3", image: "/assets/images/rubanled.png" },
    { name: "ampoule", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
    { name: "Accessories", image: "/assets/images/rubanled.png" },
  ];
  const accordionItems = [
    {
      value: "categories",
      title: "Categories",
      content: (
        <ul className="space-y-2">
          <li>
            <Button variant="ghost" className="w-full justify-start">
              Totes
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              Backpacks
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              Travel Bags
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              Hip Bags
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              Laptop Sleeves
            </Button>
          </li>
        </ul>
      ),
    },
    {
      value: "filters",
      title: "Filters",
      content: (
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Color</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Category</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Size</span>
          </label>
        </div>
      ),
    },
    {
      value: "colors",
      title: "Colors",
      content: (
        <div className="flex items-center flex-wrap gap-2">
          {colors.map((color) => (
            <CheckboxPrimitive.Root
              key={color}
              defaultChecked={color === "indigo"}
              className={cn("h-8 w-8 rounded-full", {
                "bg-indigo-500 text-indigo-500": color === "indigo",
                "bg-rose-500 text-rose-500": color === "rose",
                "bg-sky-500 text-sky-500": color === "sky",
                "bg-green-500 text-green-500": color === "green",
                "bg-orange-500 text-orange-500": color === "orange",
              })}
            >
              <CheckboxPrimitive.Indicator className="h-full w-full flex items-center justify-center">
                <CircleCheck className="h-5 w-5 fill-white stroke-current" />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
          ))}
        </div>
      ),
    },
    {
      value: "filters",
      title: "Filters",
      content: (
        <div className="space-y-4">
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Color</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Category</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Size</span>
          </label>
        </div>
      ),
    },
    {
      value: "filters",
      title: "Filters",
      content: (
        <div className="space-y-4">
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Color</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Category</span>
          </label>
          <label className="flex items-center space-x-2">
            <Checkbox /> <span>Size</span>
          </label>
        </div>
      ),
    },
  ];
  return (
    <>
      <Section className="bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Catalog</h2>
            <Filter filters={shopePageFilters} />
          </div>
          <Separator className="mb-4" />
          <div className="grid grid-cols-12 gap-11 py-4">
            {/* Sidebar with Accordion */}
            <aside className="col-span-3">
              <Accordion
                defaultValue="item-0"
                type="single"
                collapsible
                className="space-y-4"
              >
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    className=" border-b border-[#e1e1e1]"
                    key={index}
                    value={`item-${index}`}
                  >
                    <AccordionPrimitive.Header className="flex">
                      <AccordionPrimitive.Trigger className="  text-lg font-semibold flex flex-1 items-center justify-between py-4  transition-all  [&[data-state=open]>svg]:rotate-45">
                        {item.value}
                        <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className="pr-3 pb-5 transition-all duration-300 data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  <CircleX />
                  Clear Filters
                </Button>
              </div>
            </aside>

            {/* Product Grid */}
            <main className="col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((item, index) => (
                <ProductCard key={index} params={item} />
              ))}
              <div className="col-span-full flex justify-center mt-6">
                <PaginationDemo />
              </div>
            </main>
          </div>
        </div>
      </Section>
    </>
  );
}
