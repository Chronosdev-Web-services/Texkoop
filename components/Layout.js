import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Texkoop" : "Texkoop"}</title>
        <meta name="description" content="Logistics Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
