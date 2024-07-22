import { ReactNode } from "react";
import Header from "@/components/custom-ui/header";
import Projects from "@/components/custom-ui/projects";

type RootTemplateProps = {
  children: ReactNode;
};

const RootTemplate = ({ children }: RootTemplateProps) => {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-screen-xl flex-1 px-5 py-8 md:px-8">
        <div className="flex-[3]">{children}</div>
        <aside className="hidden flex-[2] lg:block">
          <Projects num={8} title="VIJESTI" />
        </aside>
      </main>
    </>
  );
};

export default RootTemplate;
