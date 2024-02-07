import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BackgroundDecoration from "./components/BackgroundDecoration";

function App() {
  const colors = {
    bg: {
      mainColor: "bg-gray-900",
      cyan500: "bg-cyan-500",
    },
    border: "border-gray-800",
    text: "text-cyan-500",
  };
  return (
    <div
      className={`flex flex-col bg-gradient-to-l ${colors.bg.mainColor} h-screen max-xl:h-max`}
    >
      <NavBar />
      <BackgroundDecoration />
      <div className="flex max-xl:flex-col md:max-xl:items-center max-xl:mt-30 z-20">
        <AboutMe colors={colors} />
        <Main colors={colors} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
