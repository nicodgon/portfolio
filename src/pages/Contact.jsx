import PropTypes from "prop-types";
import ContactForm from "../components/ContactForm";
import ContactIconContainer from "../components/ContactIconContainer";

export default function Contact({ colors }) {
  return (
    <>
      <h1 className="text-5xl font-bold text-white max-md:text-4xl">
        Contacto
      </h1>
      <div className="flex items-center gap-16 max-md:flex-col md:max-xl:gap-6 max-md:w-full">
        <ContactForm colors={colors} />
        <ContactIconContainer />
      </div>
    </>
  );
}

Contact.propTypes = {
  colors: PropTypes.object,
};
