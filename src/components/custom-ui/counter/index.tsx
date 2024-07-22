import CounterContent from "./counter-content";

const mockedData = [
  { count: 30, measure: "days" },
  { count: 35, measure: "hours" },
  { count: 19, measure: "minutes" },
  { count: 8, measure: "seconds" },
];

const Counter = () => {
  return (
    <div className="mt-8 flex gap-3 sm:mt-10 sm:gap-4 md:mt-16">
      {mockedData.map(({ count, measure }) => (
        <CounterContent key={measure} count={count} measure={measure} />
      ))}
    </div>
  );
};

export default Counter;
