import { NavLink } from "react-router-dom"

export default function NavBarList(){
  const list = ["proyectos","habilidades","estudios","contacto"]
  const active = ({isActive})=>{
    return(
      "hover:text-cyan-500 " + 
      (!isActive ? "" : "text-cyan-500")
)
  }
  return(
    <>
      {list.map((element)=>{
        return(
          <li key={element}>
          {element != "proyectos" ? <NavLink className={active} to={`/${element}`}>{element.toUpperCase()}</NavLink> : <NavLink className={active} to="/">{element.toUpperCase()}</NavLink> }
          </li>
        )
      })}
    </>
  )
}