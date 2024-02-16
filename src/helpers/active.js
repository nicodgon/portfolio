export const active = ({ isActive }) => {
  return (
    "hover:font-bold hover:text-purple-600 " +
    (!isActive ? "" : "text-purple-600 font-bold")
  );
};
