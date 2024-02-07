import ImgSkills from "../components/ImgSkills";
import ObjSkills from "../components/ObjSkills";
import PropTypes from "prop-types";
import { useChange } from "../hooks/useChange";

export default function Skills({ colors, styleContainer }) {
  const { change, renderImg, renderObj, btn } = useChange();
  return (
    <>
      <h1 className="text-5xl font-bold text-white max-md:text-4xl">
        Habilidades
      </h1>
      <div className="relative max-md:w-full">
        <button
          onClick={change}
          className="absolute translate-x-[43.3em] translate-y-3 active:scale-110 bg-white/10 p-1 rounded-lg max-md:hidden"
        >
          <img className="w-10 h-10" src={btn} alt="botón de imagen a código" />
        </button>
        <ImgSkills
          colors={colors}
          renderImg={renderImg}
          styleContainer={styleContainer}
        />
        <ObjSkills renderObj={renderObj} styleContainer={styleContainer} />
      </div>
    </>
  );
}

Skills.propTypes = {
  colors: PropTypes.object,
  styleContainer: PropTypes.node,
};
