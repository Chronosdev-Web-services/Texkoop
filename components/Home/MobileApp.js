import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const MobileApp = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className="max-w-[1440px] mx-auto my-20 w-[90%]">
      <div className="grid md:grid-cols-2">
        <div className="grid gap-5 gap-y-5 my-10 w-[80%]">
          <p className="h2-text font-bold">{t("app_head_i")}</p>
          <p className="font-medium p-text">
            {t("app_text_i")}
            <br></br>
            {t("app_text_ii")}
          </p>
          <p className="h2-text font-bold">{t("app_head_ii")}</p>
          <div className="flex center">
            <Image
              src="/images/1/google_store.svg"
              alt="get on Google Store"
              width="200"
              height="100"
              className=" "
            />
            <Image
              src="/images/1/app_store.svg"
              alt="get on Apple Store"
              width="200"
              height="100"
              className=" "
            />
          </div>
        </div>

        <div className="ml-[20%]">
          <Image
            src="/images/1/i.svg"
            alt="delivery woman"
            width="400"
            height="100"
            className=" "
          />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
