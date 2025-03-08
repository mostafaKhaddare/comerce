import ButtonsWithBadge from "./ButtonWithBadge";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link
        href="/"
        className="flex items-center  gap-3 order-0 max-sm:order-0 "
      >
        <ButtonsWithBadge iconName="logo" hasSpane={false} />
        <p className=" h3-bold md:h2-bold   ml-80px font-spaceGrotesk text-dark100_light900  ">
          led <span className="text-blue-500"> lighting </span>
        </p>
      </Link>
    </>
  );
}
