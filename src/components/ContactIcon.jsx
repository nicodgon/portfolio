import PropTypes from "prop-types";

export default function ContactIcon({
  title,
  img,
  colSpan = "",
  rowSpan = "",
  link,
  colors
}) {
  return (
    <a
      className={`${colors.bg.contactIconContainer} ${colSpan} ${rowSpan} rounded-xl p-2 group max-md:bg-white/50 max-md:rounded-full ${colors.bgXl.contactIconContainer}`}
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        src={img}
        alt={title}
        className="w-14 group-hover:scale-110 transition max-md:w-10 max-md:h-10"
      />
    </a>
  );
}

ContactIcon.propTypes = {
  title: PropTypes.node,
  img: PropTypes.node,
  colSpan: PropTypes.node,
  rowSpan: PropTypes.node,
  link: PropTypes.node,
  colors: PropTypes.object,
};
