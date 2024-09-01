import { cn } from "@/lib/utils/tailwind";
import SearchForm from "@/components/custom-ui/search-form-section/search-form";

type SearchFormSectionProps = {
  searchValue: string;
  message: string;
  className?: string;
};

const SearchFormSection = ({
  searchValue,
  className,
  message,
}: SearchFormSectionProps) => {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-6 rounded bg-white py-6 font-oswald text-gray-700 shadow-sm sm:text-lg lg:text-xl",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="text-base leading-none sm:text-lg sm:leading-none">
          Pretraži članke
        </span>
        <span className="text-xs leading-none text-gray-500 sm:text-sm sm:leading-none">
          po naslovu
        </span>
      </div>

      <SearchForm searchValue={searchValue} />

      <span className="text-xs leading-none text-gray-500 sm:text-sm sm:leading-none">
        {message}
      </span>
    </section>
  );
};

export default SearchFormSection;
