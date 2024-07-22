type CounterContentProps = {
  unit: string;
  value: number;
};

const CounterContent = ({ unit, value }: CounterContentProps) => {
  return (
    <div className="flex w-[44px] flex-col items-center justify-center rounded border border-gray-800 p-1 xxs:w-[50px] md:w-[60px]">
      <p className="font-bold xxs:text-lg sm:text-xl md:text-3xl">{value}</p>
      <span className="text-[7px] uppercase sm:text-[8px]">{unit}</span>
    </div>
  );
};

export default CounterContent;
