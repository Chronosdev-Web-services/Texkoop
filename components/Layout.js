import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

import dynamic from "next/dynamic";
import { scroller, Element } from "react-scroll";
const ScrollButton = dynamic(
  () => {
    return import("../components/ScrollButton");
  },
  { ssr: false }
);
const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 1000,
    delay: 100,
    smooth: true,
    offset: -550,
  });
};
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Texkoop" : "Texkoop"}</title>
        <meta name="description" content="Logistics Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen justify-between scroll-smooth">
        <Element name="navbar">
          <Navbar />
        </Element>
        <div onClick={() => scrollToElement("navbar")}>
          <ScrollButton />
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
