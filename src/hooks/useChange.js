import { useState } from "react";
import imageBtn from "../assets/images/icons/imageBtn.svg";
import codeBtn from "../assets/images/icons/codeBtn.svg";

export const useChange = () => {
  const [renderImg, setRenderImg] = useState("flex");
  const [renderObj, setRenderObj] = useState("hidden");
  const [btn, setBtn] = useState(codeBtn);
  const change = () => {
    renderImg == "hidden" ? setRenderImg("flex") : setRenderImg("hidden");
    renderObj == "hidden" ? setRenderObj("flex") : setRenderObj("hidden");
    btn == codeBtn ? setBtn(imageBtn) : setBtn(codeBtn);
  };
  return { change, renderImg, renderObj, btn };
};
