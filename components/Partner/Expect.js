import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { partner } from "../../utils/data";

const Expect = () => {
  const { what_can_you_expect } = partner;
  const { t } = useTranslation("partner");
  return (
    <section className="mx-auto max-w-[1440px] w-[90%] my-10">
      <p className="h2-text md:w-1/2 font-bold">{t("expect_head")}</p>
      <p className="p-text w-1/2">{t("expect_text")} </p>
      <div className="grid my-5 md: grid-cols-3 lg:gap-32 gap-10">
        {what_can_you_expect.map((card) => (
          <div
            key={card.id}
            className="px-5 py-3 grid gap-5 hover:bg-sec transition"
          >
            <div>
              <Image
                src={card.image}
                alt="how we stand out"
                className="w-full object-cover"
                width="50"
                height="50"
              />
            </div>
            <p className="text-lg font-bold ">{t(card.head)}</p>
            <p className="text-sm">{t(card.text)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expect;
