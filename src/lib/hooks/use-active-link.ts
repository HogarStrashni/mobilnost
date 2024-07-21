import { usePathname } from "next/navigation";

export const useActiveLink = () => {
  const pathName = usePathname();
  return (name: string) => pathName === "/" + name;
};
