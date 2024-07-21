import Projects from "@/components/custom-ui/projects";

const Home = () => {
  return (
    <div className="h-full lg:border-r">
      <Projects
        num={8}
        title="AKTUELNO"
        className="grid-cols-1 pl-0 md:grid-cols-2 lg:pr-4"
      />
    </div>
  );
};

export default Home;
