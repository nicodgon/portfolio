import NavList from "./NavBarList";
import Menu from "../assets/images/icons/menu.svg"
import { useState } from "react";

export default function NavBar() {
  const [menu,setMenu] = useState("max-md:hidden")
  const expand=()=>{
    menu == "max-md:hidden" ? setMenu("max-md:flex") : setMenu("max-md:hidden")
  }
  return (
    <header>
      <nav className="flex justify-center max-md:justify-start max-md:flex-col fixed z-50 bg-black/30 w-full">
        <button onClick={expand} className="w-20 h-20 bg-sky-900 rounded-2xl md:hidden"><img src={Menu} alt="menú"/></button>
        <ol className={`flex gap-14 text-lg text-white h-10 items-end max-md:pt-4 max-md:gap-4 max-md:h-48 max-md:flex-col max-md:items-start ${menu}`}>
          <NavList />
        </ol>
      </nav>
    </header>
  );
}
