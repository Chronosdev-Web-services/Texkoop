import { Router } from "next/router";
import { useState } from "react";
import Loader from "../components/Loader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setTimeout(() => {
      setLoading(false);
    });
  });
  return <>{loading ? <Loader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
