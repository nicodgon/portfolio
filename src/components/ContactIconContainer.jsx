import whatsapp from "../assets/images/Icons/whatsapp.svg";
import instagram from "../assets/images/Icons/instagram.svg";
import linkedin from "../assets/images/Icons/linkedin.svg";
import github from "../assets/images/Icons/github3.svg"
import ContactIcon from "./ContactIcon";

export default function ContactIconContainer() {
  const icons=[{
    id:1,
    title:"whatsapp",
    img:whatsapp,
    bg:"bg-blue-300",
    colSpan:"col-span-2",
    link:"https://wa.me/5459262027"
  },
  {
    id:2,
    title:"linkedin",
    img:linkedin,
    bg:"bg-blue-300",
    rowSpan:"row-span-2",
    link:"https://www.linkedin.com/in/nicol%C3%A1s-gonz%C3%A1lez-7a0544256/"
  },
  {
    id:3,
    title:"github",
    img:github,
    bg:"bg-blue-300",
    link:"https://github.com/nicodgon"
  },
  {
    id:4,
    title:"instagram",
    img:instagram,
    bg:"bg-blue-300",
    link:"https://www.instagram.com/nicolasgonzalez__1"
  }
]
  return (
    <div className="grid grid-cols-3 gap-2 w-[26em] h-80 max-md:w-full max-md:h-20 max-md:flex max-md:items-center max-md:gap-1 max-md:px-1 md:max-xl:w-[22em] md:max-xl:h-60">
    {icons.map(({id, title, img, bg, colSpan, rowSpan, link})=>{
      return(
        <ContactIcon key={id} title={title} img={img} bg={bg} colSpan={colSpan} rowSpan={rowSpan} link={link}/>
      )
    })}
    </div>
  );
}
