import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { about } from "../../utils/data";
import Button from "../Reusable/Button";

const Service = () => {
  const { t, lang } = useTranslation("about");
  const { services } = about;
  return (
    <section className="my-20 mx-auto w-[90%] max-w-[1440px]">
      <Fade cascade>
        <p className="nav-text uppercase text-sec">{t("serv_top")}</p>
        <p className="h2-text font-bold mb-5 text-pri_7 md:w-1/2">
          {t("serv_head")}
        </p>
        <p className="p-text md:w-1/2">{t("serv_text")}</p>
      </Fade>
      <div className="my-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((card) => (
          <div
            key={card.id}
            className="px-5 py-3   md:h-[400px] xl:h-[450px] flex  flex-col  gap-5 hover:bg-sec transition"
          >
            <div className="h-[50%] mb-10">
              <img
                src={card.image}
                alt="how we stand out"
                className="w-full object-contain"
              />
            </div>
            <Fade>
              <p className="text-lg font-bold ">{t(card.head)}</p>
              <p className="text-sm">{t(card.text)}</p>
            </Fade>
          </div>
        ))}
      </div>
      <Link href="/partner">
        <Button text={t("common:Nav5")} />
      </Link>
    </section>
  );
};

export default Service;
