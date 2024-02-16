import githubIcon from "../assets/images/icons/github.svg";
import { projects } from "../data/projects";
import ProjectTools from "./ProjectTools";
import PropTypes from "prop-types";

export default function Projects({ colors }) {
  return projects.map(({ id, project, url, tools, githubUrl }) => {
    return (
      <div
        key={id}
        className="flex flex-col relative items-center justify-center max-md:px-1"
      >
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className={`${colors.border} peer hover:blur cursor-pointer transition`}
        >
          <img
            className="w-[calc(1920px/5)] md:max-xl:h-[calc(1080px/3)] md:max-xl:w-[calc(1920px/3)] max-md:w-full max-md:h-auto"
            src={project}
            alt="página web"
          />
        </a>
        <div className="gap-6 absolute hidden peer-hover:flex hover:flex rounded-lg hover:bg-black/40 hover:p-1 transition-all max-xl:flex max-xl:static max-xl:p-1 max-xl:bg-black/40 max-md:gap-4">
          <ProjectTools tools={tools} />
        </div>
        <a href={githubUrl} target="_blank" rel="noreferrer noopener">
          <img
            src={githubIcon}
            alt="github"
            className="w-10 h-10 rounded-md mt-3 cursor-pointer"
          />
        </a>
      </div>
    );
  });
}

Projects.propTypes = {
  colors: PropTypes.object,
};
