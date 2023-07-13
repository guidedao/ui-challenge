import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Mono } from "next/font/google";
import { createContext, useCallback, useMemo, useState } from "react";

const ibmFont = IBM_Plex_Mono({ subsets: ["latin"], weight: "500" });

const defaultTheme = "light";

interface ThemeContextData {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: defaultTheme,
  toggleTheme: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const contextThemeData = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextThemeData}>
      <main className={ibmFont.className}>
        <Component {...pageProps} />
      </main>
    </ThemeContext.Provider>
  );
}
