import arrowDown from "../assets/images/icons/arrowDown.svg";
import arrowUp from "../assets/images/icons/arrowUp.svg";
import { useState } from "react";

export const useExpandInfo = () => {
  const [renderInfo, setRenderInfo] = useState("max-md:hidden");
  const [height, setHeight] = useState("max-md:h-[24em]");
  const [btn, setBtn] = useState(arrowDown);
  const expand = () => {
    renderInfo == "max-md:hidden"
      ? setRenderInfo("max-md:flex")
      : setRenderInfo("max-md:hidden");
    height == "max-md:h-[24em]"
      ? setHeight("max-md:h-[43em]")
      : setHeight("max-md:h-[24em]");
    btn == arrowDown ? setBtn(arrowUp) : setBtn(arrowDown);
  };
  return { expand, btn, height, renderInfo };
};
