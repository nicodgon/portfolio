import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BackgroundDecoration from "./components/BackgroundDecoration";
import { useThemeContext } from "./hooks/useThemeContext.js";

function App() {
  const { colors } = useThemeContext();
  return (
    <div
      className={`flex flex-col bg-gradient-to-l ${colors.bg.mainColor} min-h-screen max-xl:h-max`}
    >
      <NavBar colors={colors} />
      <BackgroundDecoration />
      <div className="flex max-xl:flex-col md:max-xl:items-center max-xl:mt-30 z-20">
        <AboutMe colors={colors} />
        <Main colors={colors} />
      </div>
      <Footer colors={colors} />
    </div>
  );
}

export default App;
