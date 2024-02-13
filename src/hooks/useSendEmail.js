import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { alertForm } from "../helpers/alertForm";

export default function useSendMail(){
  const form = useRef();
  
  const sendEmail = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const message = formData.get("message");
  
    if (!userName || !userEmail || !message) {
      alertForm("Por favor, complete todos los campos.");
      return;
    }
  
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY
        }
      );
      console.log("¡El mensaje ha sido enviado con exito!");
      alertForm("¡El mensaje ha sido enviado con exito!");
      form.current.reset();
    } catch (error) {
      console.log("Ha sucedido un error al enviar el mensaje", error);
      alertForm(
        "Ha sucedido un error al enviar el mensaje. Por favor, vuelva a intentarlo."
      );
    }
  };

  return {form,sendEmail}
}