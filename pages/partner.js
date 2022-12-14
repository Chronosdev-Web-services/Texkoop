import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import Expect from "../components/Partner/Expect";
import RideWithUs from "../components/Partner/RideWithUs";
import Suscribe from "../components/Partner/Suscribe";
import WhatWillYouNeed from "../components/Partner/WhatWillYouNeed";

const partner = () => {
  const { t } = useTranslation("partner");
  return (
    <Layout title="partners/join us/career">
      <section className="w-full relative h-[70vh]">
        <Image
          src="/images/3/3a.svg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <section className="w-[90%] mx-auto max-w-[1440px] my-10">
        <div className="w-[70%]">
          <p className="h2-text font-bold">{t("integrate_head")}</p>
          <p className="p-text">{t("integrate_text")}</p>
        </div>
        <Suscribe />
      </section>
      <RideWithUs />
      <Expect />
      <WhatWillYouNeed />
    </Layout>
  );
};

export default partner;
