import desarrolloWeb from "../assets/images/certificates/Certificación-DesarrolloWeb.png";
import javaScript from "../assets/images/certificates/Certificación-JavaScript.png";
import react from "../assets/images/certificates/Certificación-ReactJS.png";
import backend from "../assets/images/certificates/Certificación-Backend.png";
import CertificationContainer from "./CertificationContainer"
import PropTypes from "prop-types"

export default function ImgStudies({renderImg, styleContainer}){
  const certifications=[{
    id:1,
    title:"Desarrollo Web",
    img:desarrolloWeb,
    duration:"10 semanas (38 horas)"
  },
  {
    id:2,
    title:"JavaScript",
    img:javaScript,
    duration:"9 semanas (34 horas)"
  },
  {
    id:3,
    title:"React",
    img:react,
    duration:"8 semanas (30 horas)"
  },
  {
    id:4,
    title:"Backend",
    img:backend,
    duration:"24 semanas (94 horas)"
  },
]

  return(
    <section className={`${styleContainer} max-md:p-2 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:w-full max-md:h-max max-md:grid ${renderImg}`}>
      {certifications.map(({id, title, img,duration})=>{
        return(
          <CertificationContainer key={id} title={title} img={img} duration={duration}/>
        )
      })}
    </section>
  )
}

ImgStudies.propTypes={
  renderImg: PropTypes.node,
  styleContainer: PropTypes.node
}