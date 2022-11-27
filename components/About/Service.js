import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { about } from "../../utils/data";
import Button from "../Reusable/Button";

const Service = () => {
  const { t, lang } = useTranslation("about");
  const { services } = about;
  return (
    <section className="my-20 mx-auto w-[90%] max-w-[1440px]">
      <p className="p-small-text uppercase text-sec">{t("serv_top")}</p>
      <p className="h2-text font-bold mb-5 text-pri_7 md:w-1/2">
        {t("serv_head")}
      </p>
      <p className="p-text md:w-1/2">{t("serv_text")}</p>
      <div className="my-5 grid md:grid-cols-4 gap-5">
        {services.map((card) => (
          <div
            key={card.id}
            className="px-5 py-3 grid gap-5 hover:bg-sec transition"
          >
            <div>
              <Image
                src={card.image}
                alt="how we stand out"
                className="w-full object-cover"
                width="100"
                height="100"
              />
            </div>
            <p className="text-lg font-bold ">{t(card.head)}</p>
            <p className="text-sm">{t(card.text)}</p>
          </div>
        ))}
      </div>
      <Button text={t("common:Nav5")} />
    </section>
  );
};

export default Service;
