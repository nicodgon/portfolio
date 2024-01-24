import cssIcon from "../assets/images/icons/css.svg"
import htmlIcon from "../assets/images/icons/html.svg"
import reactIcon from "../assets/images/icons/react.svg"
import tailwindIcon from "../assets/images/icons/tailwind.svg"
import reactRouter from "../assets/images/icons/react-router.svg"
import sweetalert2 from "../assets/images/icons/sweetalert2.svg"

export default function PageInfo(){
  const styles="w-10 h-10 max-md:w-[11%] max-md:h-auto"
  return(
    <>
      <h6>Esta página fue creada utilizando:</h6>
      <div className="flex justify-center">
        <img src={reactIcon} alt="react" className={styles}/>
        <img src={htmlIcon} alt="html" className={styles}/>
        <img src={cssIcon} alt="css" className={styles}/>
        <img src={tailwindIcon} alt="tailwind" className={styles}/>
        <img src={reactRouter} alt="react router" className={styles}/>
        <img src={sweetalert2} alt="sweetalert2" className={styles}/>
      </div>
    </>
    )
}