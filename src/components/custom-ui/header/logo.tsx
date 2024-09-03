import Image from "next/image";
import logoImg from "/src/assets/logo_final.png";

const Logo = () => {
  return (
    <div className="flex items-end gap-2">
      <Image
        src={logoImg}
        alt="logo"
        className="block w-16 rounded sm:w-20 lg:w-24"
      />
      <span className="bg-gradient-to-br from-green-primary to-purple-primary bg-clip-text pr-2 text-3xl font-medium italic text-transparent max-[390px]:hidden sm:text-5xl lg:text-7xl">
        mobilnost.ba
      </span>
    </div>
  );
};

export default Logo;
