import Code from "./Code";
import PropTypes from "prop-types";
import { listObjects } from "../data/listObjects";

export default function ObjStudies({ colors, renderObj, styleContainer }) {
  return (
    <section
      className={`${styleContainer} flex items-center pl-5 max-md:hidden ${renderObj}`}
    >
      <p>
        <span className={`block ${colors.text.normal}`}>const Coderhouse = {"{"}</span>
        {listObjects.map(({ id, title, duration, certificate, img }) => {
          return (
            <Code
              key={id}
              title={title}
              duration={duration}
              certificate={certificate}
              img={img}
              colors={colors}
            />
          );
        })}
        <span className={colors.text.normal}>{"}"};</span>
      </p>
    </section>
  );
}

ObjStudies.propTypes = {
  colors: PropTypes.object,
  renderObj: PropTypes.node,
  styleContainer: PropTypes.node,
};
