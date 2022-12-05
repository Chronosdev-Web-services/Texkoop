import React from "react";
import useTranslation from "next-translate/useTranslation";
import Layout from "../components/Layout";
import Image from "next/image";
import WhatWedo from "../components/About/WhatWedo";
import Reliable from "../components/About/Reliable";
import Service from "../components/About/Service";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const { t, lang } = useTranslation("about");

  return (
    <Layout title="About">
      <section className="w-full relative h-[70vh]">
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
      <div className="absolute top-1/2 -translate-y-1/2 w-full ">
        <div className=" max-w-[1440px]  text-white w-[90%] mx-auto">
          <div className="mx-10">
            <div className="h1-text font-bold">
              <Fade cascade duration={300}>
                We are the best...
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <WhatWedo />
      <section className="w-full relative h-[70vh]">
        <Image
          src="/images/2/2c.svg"
          quality={100}
          fill
          className="h-[70vh]"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <Reliable />
      <section className="w-full relative h-[70vh]">
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
