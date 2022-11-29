import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { landing } from "../../utils/data";

const StandOut = () => {
  const { t } = useTranslation("home");
  const { why_we_stand_out } = landing;
  return (
    <section className="my-20 mx-auto w-[90%] max-w-[1440px]">
      <p className="h2-text font-bold my-5 text-pri_7">{t("heading2")}</p>
      <div className="my-5 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {why_we_stand_out.map((card) => (
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
    </section>
  );
};

export default StandOut;