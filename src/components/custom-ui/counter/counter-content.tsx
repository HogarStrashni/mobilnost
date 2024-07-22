import { motion } from "framer-motion";

type CounterContentProps = {
  unit: string;
  value: number;
};

const CounterContent = ({ unit, value }: CounterContentProps) => {
  return (
    <div className="flex w-[44px] flex-col items-center justify-center rounded border border-gray-800 p-1 xxs:w-[50px] md:w-[60px]">
      <motion.p
        key={value}
        className="font-bold xxs:text-lg sm:text-xl md:text-3xl"
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        {value > 9 ? value : "0" + value}
      </motion.p>

      <span className="text-[7px] uppercase sm:text-[8px]">{unit}</span>
    </div>
  );
};

export default CounterContent;
