import Image from "next/image";
import placeholder from "@/assets/placeholder.png";
import Link from "next/link";

type ProjectProps = {
  params?: string;
};

const Project = ({ params }: ProjectProps) => {
  return (
    <Link href={params ? `/${params}/project-id` : "/aktuelno/project-id"}>
      <div>
        <Image
          src={placeholder}
          alt="placeholder"
          className="h-full rounded object-cover"
          priority
        />
      </div>
      <h3 className="mt-1 line-clamp-2 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </h3>
    </Link>
  );
};

export default Project;
