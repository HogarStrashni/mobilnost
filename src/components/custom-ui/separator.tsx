import { cn } from "@/lib/utils/tailwind";

type SeparatorProps = {
  className?: string;
};

const Separator = ({ className }: SeparatorProps) => {
  return (
    <div
      className={cn(
        "h-1 bg-gradient-to-r from-green-600 to-violet-500",
        className,
      )}
    />
  );
};

export default Separator;
