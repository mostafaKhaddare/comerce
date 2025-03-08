import { Button } from "@/components/ui/button";
import { X, User, ShoppingBag, Heart, Zap, Search, Menu } from "lucide-react";

interface iconType {
  iconName: string;
  hasSpane: boolean;
}

const ButtonsWithBadge = (params: iconType) => (
  <div className="flex items-center gap-2 ">
    <div className="relative">
      <Button variant="outline" size="icon" className="max-sm:h-8 max-sm:w-8">
        {params.iconName === "wishlist" ? (
          <Heart fontSize={15} />
        ) : params.iconName === "cart" ? (
          <ShoppingBag />
        ) : params.iconName === "acount" ? (
          <User />
        ) : params.iconName === "logo" ? (
          <Zap />
        ) : params.iconName === "search" ? (
          <Search />
        ) : params.iconName === "close" ? (
          <X />
        ) : params.iconName === "menu" ? (
          <Menu />
        ) : null}
      </Button>
      {params.hasSpane && (
        <span className="absolute top-0 right-0 px-1 min-w-4 translate-x-1/2 -translate-y-1/2 origin-center flex items-center justify-center rounded-full text-xs bg-destructive text-destructive-foreground">
          2
        </span>
      )}
    </div>
  </div>
);

export default ButtonsWithBadge;
