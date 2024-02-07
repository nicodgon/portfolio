import CertificationContainer from "./CertificationContainer";
import PropTypes from "prop-types";
import { certifications } from "../data/certifications";

export default function ImgStudies({ renderImg, styleContainer }) {
  return (
    <section
      className={`${styleContainer} max-md:p-2 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:w-full max-md:h-max max-md:grid ${renderImg}`}
    >
      {certifications.map(({ id, title, img, duration }) => {
        return (
          <CertificationContainer
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
  renderImg: PropTypes.node,
  styleContainer: PropTypes.node,
};
