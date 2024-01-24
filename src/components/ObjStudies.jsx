import desarrolloWeb from "../assets/images/certificates/Certificación-DesarrolloWeb.png";
import javaScript from "../assets/images/certificates/Certificación-JavaScript.png";
import react from "../assets/images/certificates/Certificación-ReactJS.png";
import backend from "../assets/images/certificates/Certificación-Backend.png";
import Code from "./Code";
import PropTypes from "prop-types"

export default function ObjStudies({renderObj,styleContainer}) {

  const objects=[{
    id:1,
    title:"desarrolloWeb",
    duration:"38 horas a lo largo de 10 semanas",
    certificate:"./Certificación-DesarrolloWeb.png",
    img:desarrolloWeb
  },
  {
    id:2,
    title:"javaScript",
    duration:"34 horas a lo largo de 9 semanas",
    certificate:"./Certificación-JavaScript.png",
    img:javaScript
  },
  {
    id:3,
    title:"reactJs",
    duration:"30 horas a lo largo de 8 semanas",
    certificate:"./Certificación-ReactJs.png",
    img:react
  },
  {
    id:4,
    title:"Backend",
    duration:"94 horas a lo largo de 24 semanas",
    certificate:"./Certificación-Backend.png",
    img:backend
  },]

  return (
    <section className={`${styleContainer} flex items-center pl-5 max-md:hidden ${renderObj}`}>
      <p>
        <span className="block">const CoderHouse = {"{"}</span>
          {objects.map(({id,title,duration,certificate,img})=>{
            return(
              <Code key={id} title={title} duration={duration} certificate={certificate} img={img}/>
              )
          })}
        <span>{"}"};</span>
      </p>
    </section>
  );
}

ObjStudies.propTypes={
  renderObj: PropTypes.node,
  styleContainer: PropTypes.node
}