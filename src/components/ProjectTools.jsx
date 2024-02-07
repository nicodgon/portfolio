export default function ProjectTools({ tools }) {
  const iconStyles = "w-10 h-10 max-md:w-8 max-md:h-8";
  return tools.map(({ icon, id }) => {
    return <img key={id} src={icon} alt="css" className={iconStyles} />;
  });
}
