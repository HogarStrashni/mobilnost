import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/tailwind";
import { Frown } from "lucide-react";

type PageNotFoundProps = PropsWithChildren<{
  className?: string;
}>;

const PageNotFound = ({ children, className }: PageNotFoundProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2 rounded bg-white py-4 font-oswald shadow-sm sm:text-lg lg:text-xl",
        className,
      )}
    >
      {children}
      <Frown className="size-5 lg:size-6" />
    </div>
  );
};

export default PageNotFound;
