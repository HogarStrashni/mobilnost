import Separator from "@/components/custom-ui/separator";

const Footer = () => {
  return (
    <footer>
      <Separator />
      <div className="flex flex-col items-center py-4 text-gray-600">
        <span className="text-lg italic">mobilnost.ba</span>
        <span className="text-xs">
          Copyright &#169; 2024 All right reserved!
        </span>
      </div>
    </footer>
  );
};

export default Footer;
