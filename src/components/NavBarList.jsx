import { NavLink } from "react-router-dom";
import { navList } from "../data/navList";
import { active } from "../helpers/active";

export default function NavBarList() {
  return (
    <>
      {navList.map((element) => {
        return (
          <li key={element}>
            {element != "proyectos" ? (
              <NavLink className={active} to={`/${element}`}>
                {element.toUpperCase()}
              </NavLink>
            ) : (
              <NavLink className={active} to="/">
                {element.toUpperCase()}
              </NavLink>
            )}
          </li>
        );
      })}
    </>
  );
}
