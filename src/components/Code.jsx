import PropTypes from "prop-types"
import Swal from "sweetalert2";

export default function Code({ title, duration, certificate, img }) {
  const showCertification=(img)=>{
    Swal.fire({
      imageUrl: img,
      imageHeight: 600,
      imageWidth: 750,
      imageAlt: 'Certificación',
      width:1000,
      confirmButtonText: 'Cerrar',
      timer: 10000,
      background:'#002',
    })
  }
  return (
    <>
      <span className="block pl-10">
        {title}: {"{"}
      </span>
      <span className="block pl-20">duration: &quot;{duration}&quot;,</span>
      <span className="block pl-20">
        certificate: <button onClick={()=>showCertification(img)}>&quot;{certificate}&quot;</button>
      </span>
      <span className="block pl-10">{"}"},</span>
    </>
  );
}

Code.propTypes={
  title: PropTypes.node,
  duration: PropTypes.node,
  certificate: PropTypes.node,
  img: PropTypes.node
}