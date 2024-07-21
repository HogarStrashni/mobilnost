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
    <div className={cn("flex gap-2 py-8", className)}>
      {allCategories.map(({ name }) => (
        <Link
          key={name}
          href={`/${name}`}
          className="text-lg font-semibold uppercase"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationBar;
