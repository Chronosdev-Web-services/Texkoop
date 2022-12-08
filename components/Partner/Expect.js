import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { partner } from "../../utils/data";

const Expect = () => {
  const { what_can_you_expect } = partner;
  const { t } = useTranslation("partner");
  return (
    <section className="mx-auto max-w-[1440px] w-[90%] my-10">
      <Fade cascade>
        <p className="h2-text md:w-1/2 font-bold">{t("expect_head")}</p>
        <p className="p-text w-1/2">{t("expect_text")} </p>
      </Fade>{" "}
      <div className="grid my-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-20 gap-10">
        {what_can_you_expect.map((card) => (
          <div
            key={card.id}
            className="px-5 py-3 grid gap-5 hover:bg-sec transition"
          >
            <div className="h-[290px] 2xl:h-[350px]">
              <Image
                src={card.image}
                alt="how we stand out"
                className="w-full object-cover"
                width="50"
                height="50"
              />
            </div>
            <Fade cascade damping={0.4}>
              <p className="h4-text font-bold ">{t(card.head)}</p>
              <p className="p-text">{t(card.text)}</p>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expect;
