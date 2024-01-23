import PropTypes from "prop-types"
import Swal from 'sweetalert2'

export default function CertificationContainer({title,img,duration}) {
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
    <div className="flex flex-col justify-center items-center gap-1">
      <h4 className="text-xl">{title}</h4>
      <img
        className="w-56 h-32 hover:cursor-pointer max-md:hidden"
        src={img}
        alt="Certificación Desarrollo Web"
        onClick={()=>showCertification(img)}
      />
      <img
        className="w-full hidden max-md:flex"
        src={img}
        alt="Certificación Desarrollo Web"
      />
      <span>{duration}</span>
    </div>
  );
}

CertificationContainer.propTypes={
  title: PropTypes.node,
  img: PropTypes.node,
  duration: PropTypes.node
}