import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { about } from "../../utils/data";
import Button from "../Reusable/Button";

const Reliable = () => {
  const { reliable } = about;
  const { t } = useTranslation("about");
  return (
    <section className="my-20 mx-auto w-[90%] max-w-[1440px]">
      <Fade cascade>
        <p className="h2-text font-bold my-5 text-pri_7 md:w-1/2">
          {t("reliable_head")}
        </p>
        <p className="p-text md:w-1/2">{t("reliable_text")}</p>
      </Fade>
      <div className="my-5 grid md:grid-cols-3 gap-5">
        {reliable.map((card) => (
          <div
            key={card.id}
            className="px-5 py-3 grid gap-5 hover:bg-sec transition"
          >
            <div className="min-h-[300px] max-h-[300px]">
              <Image
                src={card.image}
                alt="how we stand out"
                className="w-full object-cover"
                width="100"
                height="100"
              />
            </div>
            <Fade>
              <p className="text-lg font-bold ">{t(card.head)}</p>
              <p className="text-sm">{t(card.text)}</p>
            </Fade>
          </div>
        ))}
      </div>
      <Button text={t("common:Nav5")} />
    </section>
  );
};

export default Reliable;
