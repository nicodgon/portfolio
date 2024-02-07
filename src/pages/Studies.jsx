import ObjStudies from "../components/ObjStudies";
import ImgStudies from "../components/ImgStudies";
import PropTypes from "prop-types";
import { useChange } from "../hooks/useChange";

export default function Studies({ styleContainer }) {
  const { change, renderImg, renderObj, btn } = useChange();
  return (
    <>
      <h1 className="text-5xl font-bold text-white max-md:text-4xl">
        Estudios
      </h1>
      <div className="relative">
        <button
          onClick={change}
          className="absolute translate-x-[43.3em] translate-y-3 active:scale-110 bg-white/10 p-1 rounded-lg max-md:hidden"
        >
          <img className="w-10 h-10" src={btn} alt="botón de imagen a código" />
        </button>
        <ImgStudies renderImg={renderImg} styleContainer={styleContainer} />
        <ObjStudies renderObj={renderObj} styleContainer={styleContainer} />
      </div>
    </>
  );
}

Studies.propTypes = {
  styleContainer: PropTypes.node,
};
