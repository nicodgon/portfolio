import PropTypes from "prop-types";

export default function ContactIcon({
  title,
  img,
  bg,
  colSpan = "",
  rowSpan = "",
  link,
}) {
  return (
    <a
      className={`${bg} ${colSpan} ${rowSpan} rounded-xl p-2 group max-md:bg-white/50 max-md:rounded-full`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={img}
        alt={title}
        className="w-14 h-14 group-hover:scale-110 transition max-md:w-10 max-md:h-10"
      />
    </a>
  );
}

ContactIcon.propTypes = {
  title: PropTypes.node,
  img: PropTypes.node,
  bg: PropTypes.node,
  colSpan: PropTypes.node,
  rowSpan: PropTypes.node,
  link: PropTypes.node,
};
