import ImgSkills from "./ImgSkills";
import ObjSkills from "./ObjSkills";
import { useState } from "react";
import imageBtn from "../assets/images/icons/imageBtn.svg"
import codeBtn from "../assets/images/icons/codeBtn.svg"
import PropTypes from "prop-types"

export default function Skills({colors,stylesContainer}) {
  const [renderImg,setRenderImg] = useState("flex")
  const [renderObj,setRenderObj] = useState("hidden")
  const [btn,setBtn] = useState(codeBtn)
  const change=()=>{
    renderImg == "hidden" ? setRenderImg("flex") : setRenderImg("hidden")
    renderObj == "hidden" ? setRenderObj("flex") : setRenderObj("hidden")
    btn == codeBtn ? setBtn(imageBtn) : setBtn(codeBtn)
  }
  return (
    <>
      <h3 className="text-5xl font-bold text-white max-md:text-5xl">Habilidades</h3>
      <div className="relative max-md:w-full max-md:p-1">
        <button onClick={change} className="absolute translate-x-[43.3em] translate-y-2 active:scale-110 border-[3px] border-black rounded-lg p-[2px] max-md:hidden"><img className="w-10 h-10" src={btn} alt="botón de imagen a código" /></button>
        <ImgSkills  colors={colors} renderImg={renderImg} stylesContainer={stylesContainer}/>
        <ObjSkills renderObj={renderObj} stylesContainer={stylesContainer}/>
      </div>
    </>
  );
}

Skills.propTypes={
  colors: PropTypes.object,
  stylesContainer: PropTypes.node
}