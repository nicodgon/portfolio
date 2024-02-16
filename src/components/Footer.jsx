import PageInfo from "./PageInfo";
import PropTypes from "prop-types";

export default function Footer({colors}) {
  return (
    <footer className={`pb-4 ${colors.text.normal} flex flex-col items-center mt-auto max-xl:pt-20 max-xl:text-center`}>
      <PageInfo />
      <p className="pt-2">
        copyright 2024 Nicolas Gonzalez - Todos los derechos reservados
      </p>
    </footer>
  );
}

Footer.propTypes = {
  colors: PropTypes.object,
};
