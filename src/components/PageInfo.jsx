import cssIcon from "../assets/images/icons/css.svg"
import htmlIcon from "../assets/images/icons/html.svg"
import reactIcon from "../assets/images/icons/react.svg"
import tailwindIcon from "../assets/images/icons/tailwind.svg"
import reactRouter from "../assets/images/icons/react-router.svg"
import sweetalert2 from "../assets/images/icons/sweetalert2.svg"

export default function PageInfo(){
  const styles="w-10 h-10 max-md:w-1/6 max-md:h-auto"
  return(
    <>
      <h6 className="max-md:text-xl">Esta página fue creada utilizando:</h6>
      <div className="flex justify-center">
        <img src={reactIcon} alt="icono de react" className={styles}/>
        <img src={htmlIcon} alt="icono de html" className={styles}/>
        <img src={cssIcon} alt="icono de css" className={styles}/>
        <img src={tailwindIcon} alt="icono de tailwind" className={styles}/>
        <img src={reactRouter} alt="icono de react router" className={styles}/>
        <img src={sweetalert2} alt="icono de sweetalert2" className={styles}/>
      </div>
    </>
    )
}