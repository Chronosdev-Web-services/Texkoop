import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { landing } from "../../utils/data";
import Button from "../Reusable/Button";

const Delivery = () => {
  const { delivery } = landing;
  const { t, lang } = useTranslation("home");
  return (
    <>
      {" "}
      <section className="mx-auto w-[90%] max-w-[1440px] my-10">
        <div>
          <p className="h2-text font-bold md:w-[70%] text-pri_7">
            {t("2ai")}...
            <br></br>
            {t("2aii")}
          </p>
          <p className="w-[70%] p-text mt-5">{t("2aiii")}</p>
        </div>
      </section>
      <section className="mx-auto w-[90%] max-w-[1440px] grid md:grid-cols-2 gap-5 my-20">
        {delivery.map((card) => (
          <div key={card.id} className="h-auto w-full">
            <Image
              src={card.image}
              alt="what we do"
              className="w-full object-cover"
              width="100"
              height="100"
            />
            <div className="shadow-md px-5 py-3 grid gap-5 hover:bg-sec transition">
              <p className="text-[12px]">{t(card.nav)}</p>
              <p className="h4-text font-bold">{t(card.head)}</p>
              <p className="p-text">{t(card.text)}</p>
              <div className="flex justify-end">
                <Button text={t("card_button")} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Delivery;
