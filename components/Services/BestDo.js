import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import Button from "../Reusable/Button";

const BestDo = () => {
  const { t } = useTranslation("services");
  return (
    <section className="w-full relative h-[600px] my-10">
      <Image
        src="/images/5/5c.svg"
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
            <p className="h1-text font-bold">{t("wedo_head")}</p>
            <p className="h2-text w-[70%]">{t("wedo_text")}</p>
            <Button text={t("button")} className="capitalize" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDo;
