import ObjStudies from "./ObjStudies";
import { useState } from "react";
import imageBtn from "../assets/images/icons/imageBtn.svg"
import codeBtn from "../assets/images/icons/codeBtn.svg"
import ImgStudies from "./ImgStudies";
import PropTypes from "prop-types"

export default function Studies({styleContainer}){
  const [renderImg,setRenderImg] = useState("flex")
  const [renderObj,setRenderObj] = useState("hidden")
  const [btn,setBtn] = useState(codeBtn)
  const change=()=>{
    renderImg == "hidden" ? setRenderImg("flex") : setRenderImg("hidden")
    renderObj == "hidden" ? setRenderObj("flex") : setRenderObj("hidden")
    btn == codeBtn ? setBtn(imageBtn) : setBtn(codeBtn)
  }
  return(
    <>
      <h3 className="text-5xl font-bold text-white max-md:text-4xl">Estudios</h3>
      <div className="relative">
        <button onClick={change} className= "absolute translate-x-[43.3em] translate-y-3 active:scale-110 bg-white/10 p-1 rounded-lg max-md:hidden"><img className="w-10 h-10" src={btn} alt="botón de imagen a código" /></button>
        <ImgStudies renderImg={renderImg} styleContainer={styleContainer}/>
        <ObjStudies renderObj={renderObj} styleContainer={styleContainer}/>
      </div>
    </>
  )
}

Studies.propTypes={
  styleContainer: PropTypes.node
}