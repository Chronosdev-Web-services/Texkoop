import { Router } from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    console.log("route is changing");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  return (
    <>
      {loading ? (
        <Layout>
          <Loader />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
