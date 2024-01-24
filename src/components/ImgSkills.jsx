import bootstrapIcon from "../assets/images/icons/bootstrap.svg";
import cssIcon from "../assets/images/icons/css.svg";
import githubIcon2 from "../assets/images/icons/github2.svg";
import htmlIcon from "../assets/images/icons/html.svg";
import javaScriptIcon from "../assets/images/icons/javascript.svg";
import reactIcon from "../assets/images/icons/react.svg";
import sassIcon from "../assets/images/icons/sass.svg";
import tailwindIcon from "../assets/images/icons/tailwind.svg";
import vscIcon from "../assets/images/icons/vsc.svg";
import mongoIcon from "../assets/images/icons/mongodb.svg";
import nodejsIcon from "../assets/images/icons/nodejs.svg";
import expressIcon from "../assets/images/icons/express.svg";
import npmIcon from "../assets/images/icons/npm.svg";
import PropTypes from "prop-types"

export default function IconsSkills({colors,renderImg,styleContainer}) {
  const iconStylesContainer = "flex flex-col items-center w-52 h-20 gap-4 max-md:w-full"
  const iconStyles = "w-12 h-12";
  
  return (
    <section className={`${styleContainer} items-center justify-center flex-col gap-8 max-md:w-full max-md:p-2 max-md:h-max max-md:pb-4 max-md:flex ${renderImg}`}>
      <h4 className="text-3xl max-md:text-3xl">Full Stack</h4>
      <h5 className={`text-xl ${colors.text} max-md:text-2xl`}>Frontend</h5>
      <div className="flex gap-14 max-md:flex-col">
        <div className={iconStylesContainer}>
          <h6 className="max-md:text-xl">Lenguajes</h6>
          <div className="flex gap-3 justify-center">
            <img className={iconStyles} src={htmlIcon} alt="html" />
            <img className={iconStyles} src={cssIcon} alt="css" />
            <img
              className={`${iconStyles} rounded-md`}
              src={javaScriptIcon}
              alt="javaScript"
            />
          </div>
        </div>
        <div className={iconStylesContainer}>
          <h6 className="max-md:text-xl">Frameworks y librerías</h6>
          <div className="flex gap-3 justify-center">
            <img className={iconStyles} src={reactIcon} alt="react" />
            <img className={iconStyles} src={bootstrapIcon} alt="bootstrap" />
            <img className={iconStyles} src={tailwindIcon} alt="tailwind" />
          </div>
        </div>
        <div className={iconStylesContainer}>
          <h6 className="max-md:text-xl">Herramientas</h6>
          <div className="flex gap-3 justify-center">
            <img className={iconStyles} src={sassIcon} alt="sass" />
            <img className={iconStyles} src={githubIcon2} alt="github" />
            <img className={`${iconStyles} ${colors.bg.cyan500} rounded-md`} src={vscIcon} alt="visual studio code" />
          </div>
        </div>
      </div>
      <h5 className={`text-xl ${colors.text} pt-6 max-md:text-2xl max-md:pt-14`}>Backend</h5>
      <div className="flex gap-14 max-md:flex-col">
        <div className={iconStylesContainer}>
          <h6 className="max-md:text-xl">Base de datos</h6>
          <div className="flex justify-center">
            <img className={`${iconStyles} bg-white/90 rounded-md p-[1px]`} src={mongoIcon} alt="MongoDB" />
          </div>
        </div>
        <div className={iconStylesContainer}>
          <h6 className="max-md:text-xl">Herramientas</h6>
          <div className="flex gap-3 justify-center">
            <img className={`${iconStyles} bg-white/90 rounded-md p-[1px]`} src={nodejsIcon} alt="nodejs" />
            <img className={`${iconStyles} bg-white/90 rounded-md p-[1px]`} src={expressIcon} alt="express" />
            <img className={`${iconStyles} bg-white/90 rounded-md p-[1px]`} src={npmIcon} alt="npm" />
          </div>
        </div>
      </div>
    </section>
  );
}

IconsSkills.propTypes={
  colors: PropTypes.object,
  renderImg: PropTypes.node,
  styleContainer: PropTypes.node
}