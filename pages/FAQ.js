import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import Questions from "../components/FAQ/Questions";
import Layout from "../components/Layout";

const FAQ = () => {
  const { t } = useTranslation("faq");
  return (
    <Layout title="FAQs">
      <section className="w-full relative h-[600px]">
        <Image
          src="/images/6/6a.svg"
          quality={100}
          fill
          alt="Texkoop delivery lady"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute top-1/2 translate-y-1/2 w-full ">
          <div className=" max-w-[1440px]  text-white w-[90%] mx-auto">
            <div className="mx-10">
              <p className="h1-text font-bold">{t("main_head")}</p>
            </div>
          </div>
        </div>
      </section>
      <Questions />
    </Layout>
  );
};

export default FAQ;
