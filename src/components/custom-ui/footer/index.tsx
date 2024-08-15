const Footer = () => {
  const currentYear = new Date(Date.now()).getFullYear();

  return (
    <footer className="flex flex-col items-center bg-gray-800 px-5 py-4 font-oswald text-gray-200 md:px-8">
      <span className="text-center text-lg italic">mobilnost.ba</span>
      <span className="text-center text-xs">
        Copyright &#169; {currentYear} All right reserved!
      </span>
    </footer>
  );
};

export default Footer;
