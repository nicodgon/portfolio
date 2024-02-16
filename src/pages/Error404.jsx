import PropTypes from "prop-types";

export default function Error404({ colors }) {
  return (
    <section className="flex flex-col text-center">
      <h3 className="text-red-700 text-[4em]">Error 404</h3>
      <p className={`${colors.text.normal} text-xl`}>Not found</p>
    </section>
  );
}

Error404.propTypes = {
  colors: PropTypes.object,
};
