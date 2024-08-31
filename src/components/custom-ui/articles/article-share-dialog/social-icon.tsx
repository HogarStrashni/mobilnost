import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/tailwind";

type SocialIconProps = PropsWithChildren<{
  className?: string;
  title: string;
}>;

const SocialIcon = ({ children, className, title }: SocialIconProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-fit flex-col items-center justify-center opacity-70 duration-200 ease-in-out hover:cursor-pointer hover:opacity-100",
        className,
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-full border border-gray-700 text-gray-700 sm:size-12">
        {children}
      </span>
      <span className="text-xs sm:mt-0.5">{title}</span>
    </div>
  );
};

export default SocialIcon;
