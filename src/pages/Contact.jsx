import PropTypes from "prop-types";
import ContactIconContainer from "../components/ContactIconContainer";
import ContactEmailContainer from "../components/ContactEmailContainer";
import { useWriter } from "../hooks/useWriter";
import { Cursor } from "react-simple-typewriter";

export default function Contact({ colors }) {
  const { text } = useWriter("Contacto");
  return (
    <>
      <h1 className={`text-5xl font-bold ${colors.text.normal} max-md:text-4xl`}>
        {text}
        <span>
          <Cursor cursorStyle="<" cursorColor="#8656ff" />
        </span>
      </h1>
      <div className="flex items-center gap-4 flex-col max-md:w-full">
        <ContactEmailContainer colors={colors} />
        <ContactIconContainer colors={colors} />
      </div>
    </>
  );
}

Contact.propTypes = {
  colors: PropTypes.object,
};