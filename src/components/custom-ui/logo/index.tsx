import { Triangle } from "lucide-react";

const Logo = () => {
  return (
    <div className="hidden bg-gradient-to-br from-green-500 to-violet-600 bg-clip-text text-xl font-extrabold italic text-transparent min-[280px]:flex sm:text-3xl md:text-5xl">
      mobilnost.ba
      <Triangle className="ml-1 size-3 stroke-violet-600 stroke-1 text-black sm:size-4 md:ml-2 md:size-6" />
    </div>
  );
};

export default Logo;
