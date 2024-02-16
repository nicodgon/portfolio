import PropTypes from "prop-types";
import { alertCertificate } from "../helpers/alertCertificate";

export default function CertificationContainer({ colors, title, img, duration }) {
  return (
    <div className={`flex flex-col justify-center items-center gap-1 ${colors.text.normal}`}>
      <h4 className="text-xl">{title}</h4>
      <img
        className="w-56 h-32 rounded transition hover:cursor-pointer hover:scale-105 max-md:hidden"
        src={img}
        alt={`Certificación ${title}`}
        onClick={() => alertCertificate(img)}
      />
      <a href={img} className="hidden w-full max-md:flex">
        <img src={img} alt={`Certificación ${title}`} />
      </a>
      <span>{duration}</span>
    </div>
  );
}

CertificationContainer.propTypes = {
  colors: PropTypes.object,
  title: PropTypes.node,
  img: PropTypes.node,
  duration: PropTypes.node,
};
