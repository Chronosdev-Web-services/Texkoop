import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import MobileApp from "../components/Home/MobileApp";
import Layout from "../components/Layout";
import BestDo from "../components/Services/BestDo";
import Delivery from "../components/Services/Delivery";
import OptimalServices from "../components/Services/OptimalServices";

const services = () => {
  const { t } = useTranslation("services");
  return (
    <Layout title="Services">
      <section className="w-full relative h-[70vh]">
        <Image
          src="/images/5/5a.svg"
          quality={100}
          fill
          priority
          alt="Texkoop delivery lady"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 w-full ">
          <div className=" max-w-[1440px]  text-white w-[90%] mx-auto ">
            <Fade cascade>
              <div className="">
                <div className="h1-text font-bold ">
                  <Fade cascade duration={300}>
                    {t("hero_headi")}
                  </Fade>
                  <br></br>
                  <Fade cascade delay={700} duration={300}>
                    {t("hero_headii")}
                  </Fade>
                </div>
                <Fade delay={2000}>
                  <p className="h2-text font-semibold">{t("hero_text")}</p>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <OptimalServices />
      <BestDo />
      <Delivery />
      <MobileApp />
    </Layout>
  );
};

export default services;
