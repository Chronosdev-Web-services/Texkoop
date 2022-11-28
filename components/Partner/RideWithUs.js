import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import RideForm from "./RideForm";

const RideWithUs = () => {
  const { t } = useTranslation("partner");
  return (
    <section className="max-w-[1440px] mx-auto">
      <p className="h2-text font-bold text-pri my-5 w-[90%] mx-auto">
        {t("ride_title")}
      </p>
      <div className="bg-pri grid md:grid-cols-2">
        <div className="text-white w-[80%] mx-auto my-5">
          <p className="h2-text font-bold">{t("ride_head")}</p>
          <p className="p-text">{t("ride_text")}</p>
          <RideForm />
        </div>
        <div className="w-full relative h-[400px] md:h-full">
          <Image
            src="/images/3/3b.svg"
            alt="bike man on helmet"
            quality={100}
            fill
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

export default RideWithUs;
