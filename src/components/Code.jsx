import PropTypes from "prop-types";
import { alertCertificate } from "../helpers/alertCertificate";

export default function Code({ colors, title, duration, certificate, img }) {
  return (
    <>
      <span className={`block pl-10 ${colors.text.normal}`}>
        {title}: {"{"}
      </span>
      <span className={`block pl-20 ${colors.text.normal}`}>duration: &quot;{duration}&quot;,</span>
      <span className={`block pl-20 ${colors.text.normal}`}>
        certificate:{" "}
        <button onClick={() => alertCertificate(img)}>
          &quot;{certificate}&quot;
        </button>
      </span>
      <span className={`block pl-10 ${colors.text.normal}`}>{"}"},</span>
    </>
  );
}

Code.propTypes = {
  colors: PropTypes.object,
  title: PropTypes.node,
  duration: PropTypes.node,
  certificate: PropTypes.node,
  img: PropTypes.node,
};
