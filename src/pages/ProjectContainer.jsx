import Projects from "../components/Projects";

export default function ProjectContainer() {
  return (
    <>
      <h1 className="text-5xl font-bold text-white max-md:text-4xl">
        Mis proyectos
      </h1>
      <div className="grid grid-cols-2 gap-x-40 h-[35em] max-xl:flex-col md:max-xl:gap-14 max-xl:justify-center max-xl:h-auto max-xl:flex max-md:gap-14">
        <Projects />
      </div>
    </>
  );
}
