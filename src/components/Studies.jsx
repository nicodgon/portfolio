import ObjStudies from "./ObjStudies";
import { useState } from "react";
import imageBtn from "../assets/images/icons/imageBtn.svg"
import codeBtn from "../assets/images/icons/codeBtn.svg"
import ImgStudies from "./ImgStudies";
import PropTypes from "prop-types"

export default function Studies({stylesContainer}){
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
      <h3 className="text-5xl font-bold text-white max-md:text-5xl">Formación</h3>
      <div className="relative max-md:p-1">
        <button onClick={change} className= "absolute translate-x-[43.3em] translate-y-2 active:scale-110 border-[3px] border-black rounded-lg p-[2px] max-md:hidden"><img className="w-10 h-10" src={btn} alt="botón de imagen a código" /></button>
        <ImgStudies renderImg={renderImg} stylesContainer={stylesContainer}/>
        <ObjStudies renderObj={renderObj} stylesContainer={stylesContainer}/>
      </div>
    </>
  )
}

Studies.propTypes={
  stylesContainer: PropTypes.node
}