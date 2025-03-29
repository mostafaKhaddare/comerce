import { Button } from "@/components/ui/button";
import {
  X,
  User,
  ShoppingBag,
  Heart,
  Zap,
  Search,
  Menu,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  LucideIcon,
  LucideProps,
} from "lucide-react";

// Create a map of icon names to their components for better maintainability
const ICON_MAP = {
  wishlist: Heart,
  cart: ShoppingBag,
  account: User,
  logo: Zap,
  search: Search,
  close: X,
  menu: Menu,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
} as const;

interface ButtonWithBadgeProps {
  iconName: keyof typeof ICON_MAP;
  badgeCount?: number;
  showBadge?: boolean;
  className?: string;
  onClick?: () => void;
}

const ButtonWithBadge = ({
  iconName,
  badgeCount = 0,
  showBadge = false,
  className = "",
  onClick,
}: ButtonWithBadgeProps) => {
  const IconComponent = ICON_MAP[iconName];

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className={`relative max-sm:h-7 max-sm:w-7 h-10 w-10 ${className}`}
          onClick={onClick}
        >
          <IconComponent size={20} />
        </Button>
        {showBadge && badgeCount > 0 && (
          <span className="absolute top-0 right-0 px-1 min-w-4 translate-x-1/2 -translate-y-1/2 origin-center flex items-center justify-center rounded-full text-xs bg-destructive text-destructive-foreground">
            {badgeCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default ButtonWithBadge;
