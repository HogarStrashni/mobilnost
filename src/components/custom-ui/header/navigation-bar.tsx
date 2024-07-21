import Link from "next/link";
import { cn } from "@/lib/utils/tailwind";

const allCategories = Array(8)
  .fill(undefined)
  .map((_, idx) => ({
    name: "category" + "-" + (idx + 1),
  }));

type NavigationBarProps = {
  className?: string;
};

const NavigationBar = ({ className }: NavigationBarProps) => {
  return (
    <div className={cn("bg-gray-200 py-3 text-gray-700", className)}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="mx-auto flex max-w-fit gap-3">
          {allCategories.map(({ name }) => (
            <Link
              key={name}
              href={`/${name}`}
              className="scale-y-110 font-semibold uppercase"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
