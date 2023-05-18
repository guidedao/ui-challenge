import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Mono } from "next/font/google";

const ibmFont = IBM_Plex_Mono({ subsets: ["latin"], weight: "500" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ibmFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
