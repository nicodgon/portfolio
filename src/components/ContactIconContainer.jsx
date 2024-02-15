import { icons } from "../data/icons";
import ContactIcon from "./ContactIcon";
import PropTypes from "prop-types";

export default function ContactIconContainer({ colors }) {
  return (
    <div className="grid grid-cols-3 gap-2 w-[40em] h-[25em] max-md:w-full max-md:h-20 max-md:flex max-md:items-center max-md:gap-2 max-md:px-1 md:max-xl:w-[40em] md:max-xl:h-96 max-md:justify-center">
      {icons.map(({ id, title, img, colSpan, rowSpan, link }) => {
        return (
          <ContactIcon
            key={id}
            title={title}
            img={img}
            colSpan={colSpan}
            rowSpan={rowSpan}
            link={link}
            colors={colors}
          />
        );
      })}
    </div>
  );
}

ContactIconContainer.propTypes = {
  colors: PropTypes.object,
};
