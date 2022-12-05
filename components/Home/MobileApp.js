import React from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const MobileApp = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className="container mx-auto mt-20 w-[90%]">
      <div className="grid md:grid-cols-2">
        <div className="grid gap-5 gap-y-5 my-10 md:w-[80%]">
          <Fade cascade damping={0.4}>
            {" "}
            <p className="h2-text font-bold">{t("app_head_i")}</p>
            <p className="font-medium p-text">
              {t("app_text_i")}
              <br></br>
              {t("app_text_ii")}
            </p>
            <p className="h2-text font-bold">{t("app_head_ii")}</p>
          </Fade>
          <div className="md:flex md:justify-around hidden ">
            <Image
              src="/images/1/google_store.svg"
              alt="get on Google Store"
              width="150"
              height="100"
              className="cursor-pointer "
              priority
            />

            <Image
              src="/images/1/app_store.svg"
              alt="get on Apple Store"
              width="150"
              height="100"
              className="cursor-pointer "
              priority
            />
          </div>
        </div>

        <div className="mx-auto">
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
        <div className="flex justify-between gap-10 md:hidden ">
          <Image
            src="/images/1/google_store.svg"
            alt="get on Google Store"
            width="150"
            height="100"
            className=" "
          />

          <Image
            src="/images/1/app_store.svg"
            alt="get on Apple Store"
            width="150"
            height="100"
            className=" "
          />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
