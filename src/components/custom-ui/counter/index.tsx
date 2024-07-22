"use client";

import { useCountdown } from "@/lib/hooks/use-countdown";
import { ConvertToCountdown } from "@/lib/utils/convert-to-countdown";
import CounterContent from "@/components/custom-ui/counter/counter-content";

type CounterProps = {
  initialValue: ConvertToCountdown;
};

const Counter = ({ initialValue }: CounterProps) => {
  const deadline = useCountdown(initialValue);

  return (
    <div className="mt-8 flex gap-3 sm:mt-10 sm:gap-4 md:mt-16">
      {Object.entries(deadline).map(([unit, value]) => (
        <CounterContent key={unit} unit={unit} value={value} />
      ))}
    </div>
  );
};

export default Counter;
