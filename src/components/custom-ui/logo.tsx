import Image from "next/image";
import logoImg from "/src/assets/logo_final.png";

const Logo = () => {
  return (
    <div className="flex items-end gap-2">
      <Image src={logoImg} alt="logo" className="block w-16 rounded" />
      <span className="text-xl italic max-[330px]:hidden">mobilnost.ba</span>
    </div>
  );
};

export default Logo;
