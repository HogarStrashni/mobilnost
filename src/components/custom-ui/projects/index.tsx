import { cn } from "@/lib/utils/tailwind";
import Project from "@/components/custom-ui/projects/project";

type ProjectsProps = {
  num: number;
  title: string;
  className?: string;
  params?: string;
};

const Projects = ({ num, title, className, params }: ProjectsProps) => {
  return (
    <div className={cn("pl-4", className)}>
      <h1 className="mb-4 animate-text-enter uppercase">{title}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Array(num)
          .fill(undefined)
          .map((item, idx) => (
            <div key={idx}>
              <Project params={params} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
