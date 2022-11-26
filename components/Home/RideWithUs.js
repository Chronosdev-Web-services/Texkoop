import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../Reusable/Button";

const RideWithUs = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className="max-w-[1440px] mx-auto grid md:grid-cols-2">
      <div>
        <img
          src="/images/1/f.svg"
          className="w-full object-cover block"
          alt="delivery man riding a bike"
        />
      </div>
      <div className="bg-pri">
        <div className="w-[80%] mx-auto md:[w-90%] text-white flex justify-around  flex-col gap-5 xl:gap-10 gap-y-5 my-20">
          <p className="uppercase text-sec text-xs lg:text-lg">
            {t("ride_top")}
          </p>
          <p className="h2-text font-bold">{t("ride_head")}</p>
          <p>
            {t("ride_texti")} <br></br>
            {t("ride_textii")}
          </p>
          <div>
            <Button text={t("ride_button")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RideWithUs;
