import { useState } from "react";

export const useExpandNavBar = () => {
  const [menu, setMenu] = useState("max-md:hidden");
  const expand = () => {
    menu == "max-md:hidden" ? setMenu("max-md:flex") : setMenu("max-md:hidden");
  };
  return { menu, expand };
};
