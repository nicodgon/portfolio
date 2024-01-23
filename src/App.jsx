import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const colors = {
    bg: {
      cyan950: "bg-cyan-950",
      cyan700: "bg-cyan-700",
      cyan500: "bg-cyan-500",
      slate: "bg-slate-900",
    },
    border: "border-cyan-500",
    text: "text-cyan-500",
  };
  return (
    <div className="flex flex-col bg-gradient-to-l from-blue-500 to-black h-screen max-xl:h-max">
      <NavBar />
        <div className="flex max-xl:flex-col md:max-xl:items-center max-xl:mt-30">
          <AboutMe colors={colors} />
          <Main colors={colors} />
        </div>
      <Footer />
    </div>
  );
}

export default App;
