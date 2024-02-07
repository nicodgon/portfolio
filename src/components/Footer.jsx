import PageInfo from "./PageInfo";

export default function Footer() {
  return (
    <footer className="pb-4 text-white flex flex-col items-center mt-auto max-xl:pt-20 max-xl:text-center">
      <PageInfo />
      <p className="pt-2">
        copyright 2024 Nicolas Gonzalez - Todos los derechos reservados
      </p>
    </footer>
  );
}
