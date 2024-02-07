export const active = ({ isActive }) => {
  return "hover:text-cyan-500 " + (!isActive ? "" : "text-cyan-500");
};
