import PropTypes from "prop-types";

export default function ContactForm({colors}){
  return(
    <form className="flex flex-col bg-black/15 w-96 h-[26em] px-16 gap-6 justify-center rounded-3xl max-md:w-64 max-md:px-2">
      <div className="flex flex-col max-md:items-start">
        <label className="text-white">Nombre:</label>
        <input type="text" placeholder="Nombre" className="rounded max-md:w-full" />
      </div>
      <div className="flex flex-col max-md:items-start">
        <label className="text-white">Email:</label>
        <input type="text" placeholder="Email" className="rounded max-md:w-full" />
      </div>
      <div className="flex flex-col max-md:items-start">
        <label className="text-white">Mensaje:</label>
        <textarea
          className="resize-none rounded max-md:w-full"
          rows={6}
          placeholder="Mensaje"
        />
      </div>
      <div className="flex justify-center">
        <button
          className={`${colors.bg.cyan500} hover:bg-cyan-700 active:bg-cyan-800 w-20 rounded-lg font-bold`}
        >
          Enviar
        </button>
      </div>
    </form>
    )
}

ContactForm.propTypes = {
  colors: PropTypes.object,
};
