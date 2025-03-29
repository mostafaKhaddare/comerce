import ButtonWithBadge from "./ButtonWithBadge";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 order-0 max-sm:order-0">
      <ButtonWithBadge iconName="logo" showBadge={false} />
      <h1 className="font-spaceGrotesk text-dark100_light900 text-xl md:text-2xl font-bold">
        led <span className="text-primary">lighting</span>
      </h1>
    </Link>
  );
}
