import Contact from "./Contact";
import ProjectContainer from "./ProjectContainer";
import Skills from "./Skills";
import Studies from "./Studies";
import {Routes, Route} from "react-router-dom"
import PropTypes from "prop-types"

export default function Main({colors}){
  const styleContainer="bg-black/35 w-[47em] h-[32em] rounded-lg text-white"
  return(
    <section className="pt-20 pl-20 pr-4 md:max-xl:flex max-md:pt-14 md:max-xl:px-0 max-xl:pl-0 max-xl:pr-0 max-xl:flex max-xl:items-center max-md:pt-20">
      <div className="flex flex-col gap-28 w-full max-xl:items-center max-md:gap-14 max-md:text-center">
        <Routes>
          <Route path="/" element={<ProjectContainer/>}/>
          <Route path="/habilidades" element={<Skills colors={colors} styleContainer={styleContainer}/>}/>
          <Route path="/estudios" element={<Studies styleContainer={styleContainer}/>}/>
          <Route path="/contacto" element={<Contact colors={colors}/>}/>
        </Routes>
      </div>
    </section>
  )
}

Main.propTypes={
  colors: PropTypes.object
}