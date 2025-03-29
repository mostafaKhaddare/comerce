import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mounted) return;
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full md:w-80">
      <MagnifyingGlassIcon className="h-5 w-5 absolute inset-y-0 my-auto left-2.5 text-gray-500 dark:text-gray-400" />
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-4 bg-slate-100/70 dark:bg-slate-800/90 border-none shadow-sm hover:shadow-md transition-shadow duration-200 rounded-full focus:ring-2 focus:ring-primary/50"
        placeholder="Search for anything..."
        type="search"
      />
    </form>
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
