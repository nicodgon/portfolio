import CertificationContainer from "./CertificationContainer";
import PropTypes from "prop-types";
import { certifications } from "../data/certifications";

export default function ImgStudies({ colors, renderImg, styleContainer }) {
  return (
    <section
      className={`${styleContainer} max-md:p-2 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:w-full max-md:h-max max-md:grid ${renderImg}`}
    >
      {certifications.map(({ id, title, img, duration }) => {
        return (
          <CertificationContainer
            colors={colors}
            key={id}
            title={title}
            img={img}
            duration={duration}
          />
        );
      })}
    </section>
  );
}

ImgStudies.propTypes = {
  colors: PropTypes.object,
  renderImg: PropTypes.node,
  styleContainer: PropTypes.node,
};
