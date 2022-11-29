import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { services } from "../../utils/data";
import Button from "../Reusable/Button";

const OptimalServices = () => {
  const { optimal_delivery } = services;
  const { t } = useTranslation("services");
  return (
    <section className="my-10 max-w-[1440px] mx-auto w-[90%]">
      <div className="my-5 w-[60%]">
        <p className="h2-text font-bold">{t("second_head")}</p>
        <p className="p-text">{t("second_text")}</p>
        <Button text={t("button")} className="capitalize" />
      </div>
      <div className="my-10 grid md:grid-cols-2 gap-10">
        {optimal_delivery.map((card) => (
          <div
            key={card.id}
            className={`h-auto w-full flex flex-col gap-5 ${
              card.id % 2 === 0 && "flex-col-reverse"
            }`}
          >
            <div>
              <Image
                src={card.image}
                alt="what we do"
                className="w-full object-cover"
                width="100"
                height="100"
              />
            </div>
            <div className="px-5 py-3 grid gap-5 transition">
              <p className="h4-text font-bold">{t(card.head)}</p>
              <p className="p-text">{t(card.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OptimalServices;
