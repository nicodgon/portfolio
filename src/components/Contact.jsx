import PropTypes from "prop-types";
import ContactForm from "./ContactForm";
import ContactIconContainer from "./ContactIconContainer";

export default function Contact({ colors }) {
  return (
    <>
      <h3 className="text-5xl font-bold text-white max-md:text-4xl">Contacto</h3>
      <div className="flex items-center gap-16 max-md:flex-col md:max-xl:gap-6 max-md:w-full">
        <ContactForm colors={colors}/>
        <ContactIconContainer/>
      </div>
    </>
  );
}

Contact.propTypes = {
  colors: PropTypes.object,
};
