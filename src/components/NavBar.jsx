import NavList from "./NavBarList";
import Menu from "../assets/images/icons/menu.svg";
import { useExpandNavBar } from "../hooks/useExpandNavBar";
import PropTypes from "prop-types";

export default function NavBar({ colors }) {
  const { menu, expand } = useExpandNavBar();
  return (
    <header>
      <nav className="flex justify-center max-md:justify-start max-md:flex-col fixed z-40 bg-black/30 w-full">
        <button
          onClick={expand}
          className="w-14 h-14 bg-black rounded-lg md:hidden"
        >
          <img src={Menu} alt="menú" />
        </button>
        <ol
          className={`flex gap-14 text-lg ${colors.text.normal} h-10 items-end max-md:pt-4 max-md:gap-4 max-md:h-48 max-md:flex-col max-md:items-start ${menu}`}
        >
          <NavList />
        </ol>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  colors: PropTypes.object,
};
