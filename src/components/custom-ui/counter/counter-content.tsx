type CounterContentProps = {
  count: number;
  measure: string;
};

const CounterContent = ({ count, measure }: CounterContentProps) => {
  return (
    <div className="flex w-12 flex-col items-center justify-center rounded border border-gray-800 p-1">
      <p className="text-xl font-bold">{count}</p>
      <span className="text-[8px] uppercase">{measure}</span>
    </div>
  );
};

export default CounterContent;
