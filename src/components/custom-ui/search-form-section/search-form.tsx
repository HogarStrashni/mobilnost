"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils/tailwind";
import { Search, X } from "lucide-react";

type SearchFormProps = {
  searchValue: string;
  className?: string;
};

const SearchForm = ({ searchValue = "", className }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState(searchValue);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(searchTerm ? `/pretraga?q=${searchTerm}` : "/pretraga");
  };

  const clearSearch = () => {
    setSearchTerm("");
    router.push("/pretraga");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-4 px-4",
        className,
      )}
    >
      <div className="relative flex w-full max-w-sm">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-10 w-full rounded-md border border-gray-400 px-8 text-center font-roboto text-sm shadow-sm sm:text-base"
        />
        <button
          type="reset"
          onClick={clearSearch}
          className={cn(
            "absolute right-0 top-1 p-2 text-gray-400 duration-200 ease-in-out hover:text-gray-500",
            searchTerm ? "opacity-100" : "opacity-0",
          )}
        >
          <X className="size-4" />
        </button>
      </div>
      <button
        type="submit"
        className="mx-auto flex max-w-fit flex-col items-center justify-center opacity-70 duration-200 ease-in-out hover:cursor-pointer hover:opacity-100"
      >
        <span className="flex size-9 items-center justify-center rounded-full border border-gray-700 text-gray-700 sm:size-12">
          <Search className="size-4 sm:size-5" />
        </span>
        <span className="text-xs sm:mt-0.5">Pretraži</span>
      </button>
    </form>
  );
};

export default SearchForm;
