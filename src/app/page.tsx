import Counter from "@/components/custom-ui/counter";

const Home = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <h1 className="xxs:text-3xl text-center text-2xl font-bold sm:text-4xl md:text-5xl">
        COMMING SOON
      </h1>
      <p className="xxs:text-base mt-1 text-center text-sm sm:text-xl md:text-3xl">
        Our website is under construction
      </p>
      <Counter />
    </main>
  );
};

export default Home;
