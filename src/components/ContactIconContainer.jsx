import { icons } from "../data/icons";
import ContactIcon from "./ContactIcon";

export default function ContactIconContainer() {
  return (
    <div className="grid grid-cols-3 gap-2 w-[26em] h-80 max-md:w-full max-md:h-20 max-md:flex max-md:items-center max-md:gap-2 max-md:px-1 md:max-xl:w-[22em] md:max-xl:h-60 max-md:justify-center">
      {icons.map(({ id, title, img, bg, colSpan, rowSpan, link }) => {
        return (
          <ContactIcon
            key={id}
            title={title}
            img={img}
            bg={bg}
            colSpan={colSpan}
            rowSpan={rowSpan}
            link={link}
          />
        );
      })}
    </div>
  );
}
