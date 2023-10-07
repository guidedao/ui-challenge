import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

const ibmFont = IBM_Plex_Mono({ subsets: ["latin"], weight: "500" });

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <ThemeProvider>
      <main className={ibmFont.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
