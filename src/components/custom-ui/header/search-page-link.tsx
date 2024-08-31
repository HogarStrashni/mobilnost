import Link from "next/link";
import { Search } from "lucide-react";

const SearchPageLink = () => {
  return (
    <Link
      href="/pretraga"
      className="flex size-9 items-center justify-center rounded-full border border-inherit opacity-70 duration-300 ease-in-out hover:opacity-100"
    >
      <Search className="size-4" />
    </Link>
  );
};

export default SearchPageLink;
