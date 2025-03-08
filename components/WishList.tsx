import React from "react";
import ButtonWithBadge from "./ButtonWithBadge";
import Link from "next/link";

function WishList() {
  return (
    <Link href="/wishlist">
      <ButtonWithBadge iconName="wishlist" hasSpane={false} />
    </Link>
  );
}

export default WishList;
