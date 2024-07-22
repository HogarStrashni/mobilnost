import { convertToCountdown } from "@/lib/utils/convert-to-countdown";
import Counter from "@/components/custom-ui/counter";

const Home = () => {
  const now = new Date().getTime();
  const initialValue = convertToCountdown(now);

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold xxs:text-3xl sm:text-4xl md:text-5xl">
        COMMING SOON
      </h1>
      <p className="mt-1 text-center text-sm xxs:text-base sm:text-xl md:mt-3 md:text-3xl">
        Our website is under construction
      </p>
      <Counter initialValue={initialValue} />
    </main>
  );
};

export default Home;
