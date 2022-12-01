import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import Button from "../Reusable/Button";

const NewLocation = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className=" bg-pri relative">
      <div className="max-w-[1440px] mx-auto md:flex ">
        <div className="clip w-[100px] h-[100px] top-0 left-0 absolute bg-sec"></div>
        <div className="md:min-w-[60%] py-5">
          <div className="w-[80%] mx-auto ">
            <div className="w-[80%]  md:[w-90%] text-white flex flex-col justify-between gap-10">
              <p className="uppercase text-sec text-xs lg:text-lg">
                {t("location_top")}
              </p>
              <p className="h2-text font-bold">
                {t("location_headi")}
                <br></br>
                {t("location_headii")}
              </p>
              <p>{t("location_text")}</p>
              <div>
                <Button text={t("location_button")} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative h-[400px] md:h-full">
          <img
            src="/images/3/3b.svg"
            alt="bike man on helmet"
            quality={100}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default NewLocation;
