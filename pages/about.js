import React from "react";
import useTranslation from "next-translate/useTranslation";
import Layout from "../components/Layout";
import Image from "next/image";
import WhatWedo from "../components/About/WhatWedo";
import Reliable from "../components/About/Reliable";
import Service from "../components/About/Service";

const About = () => {
  const { t, lang } = useTranslation("about");

  return (
    <Layout title="About">
      <section className="w-full relative h-screen">
        <Image
          src="/images/2/2a.svg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <WhatWedo />
      <section className="w-full relative h-screen">
        <Image
          src="/images/2/2c.svg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <Reliable />
      <section className="w-full relative h-screen">
        <Image
          src="/images/2/2d.svg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <Service />
    </Layout>
  );
};

export default About;
