import PropTypes from "prop-types";
import { alertCertificate } from "../helpers/alertCertificate";

export default function Code({ title, duration, certificate, img }) {
  return (
    <>
      <span className="block pl-10">
        {title}: {"{"}
      </span>
      <span className="block pl-20">duration: &quot;{duration}&quot;,</span>
      <span className="block pl-20">
        certificate:{" "}
        <button onClick={() => alertCertificate(img)}>
          &quot;{certificate}&quot;
        </button>
      </span>
      <span className="block pl-10">{"}"},</span>
    </>
  );
}

Code.propTypes = {
  title: PropTypes.node,
  duration: PropTypes.node,
  certificate: PropTypes.node,
  img: PropTypes.node,
};
