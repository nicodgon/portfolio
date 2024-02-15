import PropTypes from "prop-types";
import ContactIconContainer from "../components/ContactIconContainer";
import ContactEmailContainer from "../components/ContactEmailContainer";

export default function Contact({ colors }) {
  return (
    <>
      <h1 className="text-5xl font-bold text-white max-md:text-4xl">
        Contacto
      </h1>
      <div className="flex items-center gap-4 flex-col max-md:w-full">
        <ContactEmailContainer />
        <ContactIconContainer colors={colors} />
      </div>
    </>
  );
}

Contact.propTypes = {
  colors: PropTypes.object,
};
