import { ReactNode, createContext, useState } from "react";

type ThemeContextProps = {
  theme: string;
  setTheme: (theme: "light" | "dark") => void;
  toggleSwitch: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // LÓGICA
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [user, setUser] = useState("Fulano");
  const toggleSwitch = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleSwitch }}>
      {children}
    </ThemeContext.Provider>
  );
};