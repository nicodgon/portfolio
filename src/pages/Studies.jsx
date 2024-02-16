import ObjStudies from "../components/ObjStudies";
import ImgStudies from "../components/ImgStudies";
import PropTypes from "prop-types";
import { useChange } from "../hooks/useChange";
import { useWriter } from "../hooks/useWriter";
import { Cursor } from "react-simple-typewriter";

export default function Studies({ colors, styleContainer }) {
  const { text } = useWriter("Estudios");
  const { change, renderImg, renderObj, btn } = useChange();
  return (
    <>
      <h1
        className={`text-5xl font-bold  ${colors.text.normal} max-md:text-4xl`}
      >
        {text}
        <span>
          <Cursor cursorStyle="<" cursorColor="#8656ff" />
        </span>
      </h1>
      <div className="relative">
        <button
          onClick={change}
          className={`absolute translate-x-[43.3em] translate-y-3 active:scale-110 ${colors.bg.btn} p-1 rounded-lg max-md:hidden`}
        >
          <img className="w-10 h-10" src={btn} alt="botón de imagen a código" />
          <span className="absolute flex h-3 w-3 translate-x-9 -translate-y-12">
            <span className={`animate-ping absolute h-full w-full rounded-full ${colors.bg.btnSpan} opacity-75`}></span>
            <span className={`rounded-full h-3 w-3 ${colors.bg.btnSpan}`}></span>
          </span>
        </button>
        <ImgStudies colors={colors} renderImg={renderImg} styleContainer={styleContainer} />
        <ObjStudies colors={colors} renderObj={renderObj} styleContainer={styleContainer} />
      </div>
    </>
  );
}

Studies.propTypes = {
  colors: PropTypes.object,
  styleContainer: PropTypes.node,
};
