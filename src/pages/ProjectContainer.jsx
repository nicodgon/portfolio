import Projects from "../components/Projects";
import { Cursor } from "react-simple-typewriter";
import { useWriter } from "../hooks/useWriter";
import PropTypes from "prop-types";

export default function ProjectContainer({ colors }) {
  const { text } = useWriter("Mis proyectos");
  return (
    <>
      <h1
        className={`text-5xl font-bold ${colors.text.normal} max-md:text-4xl`}
      >
        {text}
        <span>
          <Cursor cursorStyle="<" cursorColor="#8656ff" />
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-x-40 h-[35em] max-xl:flex-col md:max-xl:gap-14 max-xl:justify-center max-xl:h-auto max-xl:flex max-md:gap-14">
        <Projects colors={colors}/>
      </div>
    </>
  );
}

ProjectContainer.propTypes = {
  colors: PropTypes.object,
};
