import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { about } from "../../utils/data";

const WhatWedo = () => {
  const { t } = useTranslation("about");
  const { what_we_do } = about;
  return (
    <section className="w-[90%] max-w-[1440px] mx-auto grid my-20 md:grid-cols-2">
      <div className="flex flex-col justify-betweeen w-[90%] gap-10">
        <Fade cascade damping={0.7}>
          {what_we_do.map((data) => (
            <div key={data.id}>
              <Fade cascade>
                <p className="nav-text uppercase text-sec">{t(data.top)}</p>
                <p className="h2-text font-bold">{t(data.head)}</p>
                <p className="p-text ">{t(data.text)}</p>
              </Fade>
            </div>
          ))}
        </Fade>
      </div>
      <div className="w-full relative h-[400px]">
        <Image
          src="/images/2/2b.svg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default WhatWedo;
