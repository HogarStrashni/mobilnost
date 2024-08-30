import Link from "next/link";
import { Search } from "lucide-react";

const SearchPageLink = () => {
  return (
    <Link
      href="/pretraga"
      className="flex size-9 items-center justify-center rounded-full border border-inherit"
    >
      <Search className="size-4" />
    </Link>
  );
};

export default SearchPageLink;
