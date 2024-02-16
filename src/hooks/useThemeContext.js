import { useContext } from "react";
import { themeContext } from "../helpers/createContext";

export function useThemeContext() {
  return useContext(themeContext);
}
