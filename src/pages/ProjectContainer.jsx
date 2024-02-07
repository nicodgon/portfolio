import Projects from "../components/Projects";

export default function ProjectContainer() {
  return (
    <>
      <h1 className="text-5xl font-bold text-white max-md:text-4xl">
        Mis proyectos
      </h1>
      <div className="flex gap-4 flex-wrap h-[17.5em] overflow-y-auto md:max-xl:flex-col md:max-xl:gap-14 max-xl:justify-center max-md:gap-14 max-xl:h-max max-xl:h-max">
        <Projects />
      </div>
    </>
  );
}
