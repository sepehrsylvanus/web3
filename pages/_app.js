/* eslint-disable quotes */
import Script from "next/script";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
import { Navbar, Footer } from "../components";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <Script
      src="https://kit.fontawesome.com/1e092a54e7.js"
      crossorigin="anonymous"
    />
  </ThemeProvider>
);

export default MyApp;
