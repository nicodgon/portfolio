import { useExpandInfo } from "../hooks/useExpandInfo";
import ProfilePicture from "./ProfilePicture";
import ProfileText from "./ProfileText";
import PropTypes from "prop-types";
import { useThemeContext } from "../hooks/useThemeContext.js";

export default function AboutMe({ colors }) {
  const { theme, handleChange } = useThemeContext();
  const { expand, btn, height, renderInfo } = useExpandInfo();
  return (
    <div
      className={`flex flex-col items-center w-3/12 max-xl:w-full ${height} max-md:-z-10`}
    >
      <section
        className={`w-[20em] h-[41em] rounded-[3em] flex justify-center items-center flex-col ${colors.text.normal} mt-20 relative z-10 overflow-hidden md:max-xl:h-[20em] max-xl:from-transparent max-xl:w-full max-md:overflow-visible max-md:h-[43em]`}
      >
        <span
          className={`absolute w-[300%] h-[300%] animate-spin ${colors.bg.span} from-20% z-20 max-xl:hidden`}
        ></span>
        <div
          className={`relative flex flex-col items-center ${colors.bg.aboutMe} h-[calc(40em-6px)] w-[calc(20em-6px)] rounded-[3em] p-4 md:max-xl:w-full md:max-xl:flex-row md:max-xl:gap-24 max-xl:bg-transparent md:max-xl:justify-center max-md:w-full max-md:justify-start max-md:h-[43em] z-30`}
        >
          <ProfilePicture />
          <button
            className={`flex items-center justify-center bg-gray-800 rounded-full absolute w-12 h-12 mt-40 ml-56 transition md:max-xl:-ml-72 hover:scale-110 hover:cursor-pointer`}
            onClick={() => handleChange()}
          >
            <img src={theme} alt="tema de la página" className="w-7" />
          </button>
          <button
            className={`hidden w-12 h-12 my-2 justify-center items-center rounded-full bg-black max-md:flex`}
            onClick={expand}
          >
            <img className="w-10" src={btn} alt="ver mas" />
          </button>
          <ProfileText colors={colors} renderInfo={renderInfo} />
        </div>
      </section>
    </div>
  );
}

AboutMe.propTypes = {
  colors: PropTypes.object,
};
