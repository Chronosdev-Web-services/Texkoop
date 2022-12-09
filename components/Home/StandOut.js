import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { landing } from "../../utils/data";

const StandOut = () => {
  const { t } = useTranslation("home");
  const { why_we_stand_out } = landing;
  return (
    <section className="my-20 mx-auto w-[90%] container">
      <Fade cascade duration={300}>
        <p className="h2-text font-bold my-5 text-pri_7">{t("heading2")}</p>
      </Fade>
      <div className="my-5 grid md:grid-cols-2   lg:grid-cols-4 gap-5">
        {why_we_stand_out.map((card) => (
          <div
            key={card.id}
            className="px-5 py-3 hover:bg-sec transition w-[90%] h-[400px] lg:full mx-auto"
          >
            <div className="md:h-[200px] ">
              <img
                src={card.image}
                alt="how we stand out"
                className="w-full object-cover  h-full"
              />
            </div>
            <Fade cascade damping={0.4}>
              <p className="text-lg font-bold mt-5">{t(card.head)}</p>
              <p className="text-sm">{t(card.text)}</p>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StandOut;
