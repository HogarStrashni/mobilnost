import { cn } from "@/lib/utils/tailwind";

type SeparatorProps = {
  className?: string;
};

const Separator = ({ className }: SeparatorProps) => {
  return (
    <div
      className={cn(
        "h-1 bg-gradient-to-r from-green-primary to-purple-primary",
        className,
      )}
    />
  );
};

export default Separator;
