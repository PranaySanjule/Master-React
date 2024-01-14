import { createContext, useContext } from "react";

// create ThemeContext
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// ThemeProvider
export const ThemeProvider = ThemeContext.Provider;

// useTheme() Hook
export default function useTheme() {
  return useContext(ThemeContext);
}
