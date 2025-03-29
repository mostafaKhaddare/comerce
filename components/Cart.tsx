"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, X } from "lucide-react";
import ButtonWithBadge from "./ButtonWithBadge";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ButtonWithBadge iconName="cart" showBadge={true} />
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
              </Button>
            </SheetTrigger>
          </div>
        </SheetHeader>
        <Separator className="my-4" />
        <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
          <div className="flex flex-col gap-4">
            {/* Empty cart state */}
            <div className="flex flex-col items-center justify-center h-[50vh] text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Add some items to your cart to see them here.
              </p>
            </div>
          </div>
        </ScrollArea>
        <div className="space-y-4 mt-4">
          <Separator />
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="text-sm font-semibold">$0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Shipping</span>
              <span className="text-sm font-semibold">Free</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">Total</span>
              <span className="text-base font-semibold">$0.00</span>
            </div>
          </div>
          <Button className="w-full">Checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
