type CounterContentProps = {
  count: number;
  measure: string;
};

const CounterContent = ({ count, measure }: CounterContentProps) => {
  return (
    <div className="flex w-10 flex-col items-center justify-center rounded border border-gray-800 p-1 xxs:w-12 md:w-14">
      <p className="font-bold xxs:text-lg sm:text-xl md:text-2xl">{count}</p>
      <span className="text-[7px] uppercase sm:text-[8px]">{measure}</span>
    </div>
  );
};

export default CounterContent;
