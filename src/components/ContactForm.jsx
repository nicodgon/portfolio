import PropTypes from "prop-types";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ colors }) {
  const form = useRef();
  console.log(import.meta.env.VITE_SERVICE_ID);
  console.log(import.meta.env.VITE_TEMPLATE_ID);
  console.log(import.meta.env.VITE_PUBLIC_KEY);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("¡El mensaje ha sido enviado con exito!");
          form.current.reset();
        },
        (error) => {
          console.log("Ha sucedido un error al enviar el mensaje", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      
      className="flex flex-col bg-black/15 w-96 h-[26em] px-16 gap-6 justify-center rounded-3xl max-md:px-8 max-md:w-full"
    >
      <div className="flex flex-col max-md:items-start">
        <label className="text-white">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
          name="user_name"
          className="rounded max-md:w-full max-md:h-8 bg-slate-700 text-white"
          required
        />
      </div>
      <div className="flex flex-col max-md:items-start">
        <label className="text-white">Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="rounded max-md:w-full max-md:h-8 bg-slate-700 text-white"
          required
        />
      </div>
      <div className="flex flex-col max-md:items-start">
        <label className="text-white">Mensaje:</label>
        <textarea
          className="resize-none rounded max-md:w-full bg-slate-700 text-white"
          rows={6}
          type="text"
          placeholder="Mensaje"
          name="message"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className={`${colors.bg.cyan500} hover:bg-cyan-700 active:bg-cyan-800 w-20 rounded-lg font-bold`}
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  colors: PropTypes.object,
};
