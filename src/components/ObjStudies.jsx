import Code from "./Code";
import PropTypes from "prop-types";
import { listObjects } from "../data/listObjects";

export default function ObjStudies({ renderObj, styleContainer }) {
  return (
    <section
      className={`${styleContainer} flex items-center pl-5 max-md:hidden ${renderObj}`}
    >
      <p>
        <span className="block">const Coderhouse = {"{"}</span>
        {listObjects.map(({ id, title, duration, certificate, img }) => {
          return (
            <Code
              key={id}
              title={title}
              duration={duration}
              certificate={certificate}
              img={img}
            />
          );
        })}
        <span>{"}"};</span>
      </p>
    </section>
  );
}

ObjStudies.propTypes = {
  renderObj: PropTypes.node,
  styleContainer: PropTypes.node,
};
