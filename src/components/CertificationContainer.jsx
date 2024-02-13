import PropTypes from "prop-types";
import { alertCertificate } from "../helpers/alertCertificate";

export default function CertificationContainer({ title, img, duration }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <h4 className="text-xl">{title}</h4>
      <img
        className="w-56 h-32 hover:cursor-pointer max-md:hidden"
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
  title: PropTypes.node,
  img: PropTypes.node,
  duration: PropTypes.node,
};
