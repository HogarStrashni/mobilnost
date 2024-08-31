import { usePathname } from "next/navigation";

export const useActiveLink = () => {
  const pathName = usePathname();
  return (name: string | null) =>
    name === "" ? pathName === "/" : pathName.startsWith("/" + name);
};
