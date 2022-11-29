import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import MobileApp from "../components/Home/MobileApp";
import Layout from "../components/Layout";
import BestDo from "../components/Services/BestDo";
import Delivery from "../components/Services/Delivery";
import OptimalServices from "../components/Services/OptimalServices";

const services = () => {
  const { t } = useTranslation("services");
  return (
    <Layout title="Services">
      <section className="w-full relative h-[600px]">
        <Image
          src="/images/5/5a.svg"
          quality={100}
          fill
          alt="Texkoop delivery lady"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 w-full ">
          <div className=" max-w-[1440px]  text-white w-[90%] mx-auto">
            <div className="mx-10">
              <p className="h1-text font-bold">
                {t("hero_headi")}
                <br></br>
                {t("hero_headii")}
              </p>
              <p className="h2-text">{t("hero_text")}</p>
            </div>
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
