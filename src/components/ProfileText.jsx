import PropTypes from "prop-types";

export default function ProfilePicture({ colors, renderInfo }) {
  return (
    <div
      className={`flex flex-col items-center mt-7 gap-2 text-center md:max-xl:mt-0 md:max-xl:items-start md:max-xl:text-start max-md:mt-0 ${renderInfo}`}
    >
      <h2 className="text-3xl md:max-xl:text-4xl max-md:text-3xl">
        Nicolás Gonzalez
      </h2>
      <h3 className="text-2xl my-2 max-md:text-2xl">
        Desarrollador{" "}
        <span
          className={`${colors.text.decoration} max-xl:text-cyan-500 ${colors.textXl.textDecoration}`}
        >
          Full Stack
        </span>
      </h3>
      <p
        className={`text-white p-2 md:max-xl:w-[24em] md:max-xl:p-0 ${colors.textXl.normal}`}
      >
        Me apasiona estar siempre aprendiendo nuevas tecnologías. Soy una
        persona muy detallista con todos mis trabajos y amo lo que hago.
      </p>
      <a
        href="/downloads/currículum-programación.pdf" download
        className={`border-2 ${colors.border} ${colors.text.cv} rounded-full w-40 h-12 flex justify-center items-center text-lg mt-2 relative overflow-hidden group z-50 active:border-black ${colors.textXl.btnDecoration}`}
      >
          Descargar CV
        <span
          className={`absolute w-40 h-12 ${colors.bg.cv} translate-x-40 rounded-full group-hover:translate-x-0 transition duration-500 -z-50 md:max-xl:bg-gray-800`}
        ></span>
      </a>
    </div>
  );
}

ProfilePicture.propTypes = {
  colors: PropTypes.object,
  renderInfo: PropTypes.node,
};
