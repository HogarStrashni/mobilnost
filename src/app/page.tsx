import Counter from "@/components/custom-ui/counter";

const Home = () => {
  const initialValue = {
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <h1 className="xxs:text-3xl text-center text-2xl font-bold sm:text-4xl md:text-5xl">
        COMMING SOON
      </h1>
      <p className="xxs:text-base mt-1 text-center text-sm sm:text-xl md:mt-3 md:text-3xl">
        Our website is under construction
      </p>
      <Counter initialValue={initialValue} />
    </main>
  );
};

export default Home;
