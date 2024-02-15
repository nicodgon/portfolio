import { useExpandInfo } from "../hooks/useExpandInfo";
import ProfilePicture from "./ProfilePicture";
import ProfileText from "./ProfileText";
import PropTypes from "prop-types";

export default function AboutMe({ colors }) {
  const { expand, btn, height, renderInfo } = useExpandInfo();
  return (
    <div
      className={`flex flex-col items-center w-3/12 max-xl:w-full ${height} max-md:-z-10`}
    >
      <section className="w-[20em] h-[41em] rounded-[3em] flex justify-center items-center flex-col text-white mt-20 relative z-10 overflow-hidden md:max-xl:h-[20em] max-xl:from-transparent max-xl:w-full max-md:overflow-visible max-md:h-[43em]">
        <span className="absolute w-[300%] h-[300%] animate-spin bg-gradient-to-l from-gray-900 to-purple-950 from-20% z-20 max-xl:hidden"></span>
        <div
          className={`flex flex-col items-center ${colors.bg.mainColor} h-[calc(40em-6px)] w-[calc(20em-6px)] rounded-[3em] p-4 md:max-xl:w-full md:max-xl:flex-row md:max-xl:gap-24 max-xl:bg-transparent md:max-xl:justify-center max-md:w-full max-md:justify-start max-md:h-[43em] z-30`}
        >
          <ProfilePicture colors={colors} />
          <button className="hidden max-md:flex" onClick={expand}>
            <img className="w-10 h-10" src={btn} alt="ver mas" />
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
