import React from "react";
import ButtonWithBadge from "./ButtonWithBadge";
import Link from "next/link";

interface WishListProps {
  itemCount?: number;
  className?: string;
}

function WishList({ itemCount = 0, className = "" }: WishListProps) {
  return (
    <Link
      href="/wishlist"
      className={`wishlist-link ${className}`}
      aria-label="View wishlist"
    >
      <ButtonWithBadge
        iconName="wishlist"
        showBadge={false}
        badgeCount={itemCount}
        aria-label="Wishlist items"
      />
    </Link>
  );
}

export default WishList;
