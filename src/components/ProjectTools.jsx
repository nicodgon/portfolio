export default function ProjectTools({ tools }) {
  const iconStyles = "w-10 h-10 max-md:w-8 max-md:h-8";
  return tools.map(({ id, icon, alt }) => {
    return <img key={id} src={icon} alt={alt} className={iconStyles} />;
  });
}
