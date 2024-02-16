import { useState } from "react";
import PropTypes from "prop-types";
import { themeContext } from "../helpers/createContext";
import sun from "../assets/images/icons/sun.svg";
import moon from "../assets/images/icons/moon.svg";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(sun);
  const [colors, setColors] = useState({
    bg: {
      mainColor: "bg-gray-900",
      aboutMe: "bg-gray-900",
      contactIconContainer: "bg-purple-700",
      cv: "bg-gray-600",
      contactEmail: "bg-white/50",
      container: "bg-black/35",
      span: "bg-gradient-to-l from-gray-900 to-purple-950",
      btn: "bg-white/10",
      btnSpan: "bg-sky-400",
    },
    bgMd: {
      contactIconContainer: "max-md:bg-white/25",
    },
    border: "",
    text: {
      normal: "text-white",
      decoration: "text-cyan-500",
      decorationImg: "text-cyan-500",
      aboutMe: "text-white/70",
      cv: "text-white",
    },
    textXl: {
      normal: "text-white",
      textDecoration: "max-xl:text-cyan-500",
      btnDecoration: "max-xl:text-white",
    },
  });
  const handleChange = () => {
    if (theme == sun) {
      setTheme(moon);
      setColors({
        bg: {
          mainColor: "bg-white",
          aboutMe: "bg-purple-700",
          contactIconContainer: "bg-purple-600/50",
          cv: "bg-black",
          contactEmail: "bg-gray-300/50",
          container: "bg-violet-200/50",
          span: "bg-gradient-to-l from-violet-500 to-pink-600",
          btn: "bg-purple-700",
          btnSpan: "bg-violet-950",
        },
        bgMd: {
          contactIconContainer: "max-md:bg-purple-600",
        },
        border: "border-2 rounded border-black/30",
        text: {
          normal: "text-black/70",
          decoration: "text-white/70",
          decorationImg: "text-cyan-700",
          aboutMe: "text-white/70",
          cv: "text-white/70",
        },
        textXl: {
          normal: "max-xl:text-black/70",
          textDecoration: "max-xl:text-purple-800",
          btnDecoration: "max-xl:text-purple-800",
        },
      });
    } else {
      setTheme(sun);
      setColors({
        bg: {
          mainColor: "bg-gray-900",
          aboutMe: "bg-gray-900",
          contactIconContainer: "bg-purple-700",
          cv: "bg-gray-600",
          contactEmail: "bg-white/50",
          container: "bg-black/35",
          span: "bg-gradient-to-l from-gray-900 to-purple-950",
          btn: "bg-white/10",
          btnSpan: "bg-sky-400",
        },
        bgMd: {
          contactIconContainer: "max-md::bg-white/50",
        },
        border: "",
        text: {
          normal: "text-white",
          decoration: "text-cyan-500",
          decorationImg: "text-cyan-500",
          aboutMe: "text-cyan-400",
          cv: "text-white",
        },
        textXl: {
          normal: "text-white",
          textDecoration: "max-xl:text-cyan-500",
          btnDecoration: "max-xl:text-white",
        },
      });
    }
  };
  return (
    <themeContext.Provider
      value={{
        theme,
        handleChange,
        colors,
      }}
    >
      {children}
    </themeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
