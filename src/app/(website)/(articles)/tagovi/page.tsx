import { Frown } from "lucide-react";

const TagsPage = () => {
  return (
    <div className="flex items-center justify-center gap-2 rounded bg-white py-4 font-oswald shadow-sm sm:text-lg lg:text-xl">
      Stranica nije pronađena!
      <Frown className="size-5 lg:size-6" />
    </div>
  );
};

export default TagsPage;
