import { Circle, CircleCheck } from "lucide-react";

type CarouselNavigationProps = {
  current: number;
  total: number;
  onNavigationClick: (index: number) => void;
};

const CarouselNavigation = ({
  current,
  total,
  onNavigationClick,
}: CarouselNavigationProps) => {
  const navigationButtonArray = Array.from(Array(total).keys());

  return (
    <div className="flex gap-1">
      {navigationButtonArray.map((item) => (
        <button
          key={item}
          className="duration-200"
          onClick={() => onNavigationClick(item)}
          disabled={item === current}
        >
          {item === current ? (
            <CircleCheck className="size-4 stroke-[3px] text-purple-primary" />
          ) : (
            <Circle className="size-3 stroke-[3px] text-green-primary" />
          )}
        </button>
      ))}
    </div>
  );
};

export default CarouselNavigation;
