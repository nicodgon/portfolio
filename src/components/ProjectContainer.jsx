import cakeShop from "../assets/images/portfolio/cake-shop.png";
import gamerShop from "../assets/images/portfolio/gamer-shop.png";
import pizzaShop from "../assets/images/portfolio/pizza-shop.png";
import bootstrapIcon from "../assets/images/icons/bootstrap.svg";
import cssIcon from "../assets/images/icons/css.svg";
import githubIcon from "../assets/images/icons/github.svg";
import htmlIcon from "../assets/images/icons/html.svg";
import javaScriptIcon from "../assets/images/icons/javascript.svg";
import reactIcon from "../assets/images/icons/react.svg";
import sassIcon from "../assets/images/icons/sass.svg";
import Projects from "./Projects";

export default function ProjectContainer() {
  return (
    <>
      <h1 className="text-5xl font-bold text-white max-md:text-4xl">Mis proyectos</h1>
      <div className="flex gap-4 flex-wrap h-[17.5em] overflow-y-auto md:max-xl:flex-col md:max-xl:gap-14 max-xl:justify-center max-md:gap-14 max-xl:h-max max-xl:h-max">
        <Projects
          pages={[cakeShop, gamerShop, pizzaShop]}
          bootstrapIcon={bootstrapIcon}
          cssIcon={cssIcon}
          githubIcon={githubIcon}
          htmlIcon={htmlIcon}
          javaScriptIcon={javaScriptIcon}
          reactIcon={reactIcon}
          sassIcon={sassIcon}
        />
      </div>
    </>
  );
}
