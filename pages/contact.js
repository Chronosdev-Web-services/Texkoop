import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import GoogleMapComponent from "../components/Contact/GoogleMap";
import Layout from "../components/Layout";

const contact = () => {
  const { t } = useTranslation("contact");

  return (
    <Layout title="Contact Us">
      <section className="w-full relative h-[500px]">
        <Image
          src="/images/4/4.svg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <section className="w-[90%] max-w-[1440px] mx-auto">
        <GoogleMapComponent />
      </section>
      <section className="w-[90%] mx-auto max-w-[1440px] my-10">
        <p className="h2-text font-bold w-1/2">{t("contact_head")}</p>
        <p className="p-text w-1/2">{t("contact_text")}</p>
      </section>

      <ContactForm />
    </Layout>
  );
};

export default contact;
