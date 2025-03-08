import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Search = () => {
  return (
    <Link href="/search">
      <div className="relative ">
        <MagnifyingGlassIcon className="h-5 w-5 absolute inset-y-0 my-auto left-2.5" />
        <Input
          className="pl-10  bg-slate-100/70 dark:bg-slate-800 border-none shadow-none sm:w-full md:w-fit  rounded-full"
          placeholder="whar are you looking for"
        />
      </div>
    </Link>
  );
};

export default Search;

// export function SearchSkeleton() {
//   return (
//     <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
//       <input
//         placeholder="Search for products..."
//         className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
//       />
//       <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
//         <MagnifyingGlassIcon className="h-4" />
//       </div>
//     </form>
//   );
// }
