import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Button from "../Reusable/Button";

const WhatWillYouNeed = () => {
  const { t } = useTranslation("partner");
  return (
    <section className="my-20 bg-pri relative">
      <div className="clip2 w-[100px] h-[100px] top-0 right-0 absolute bg-sec"></div>
      <div className=" max-w-[1440px] mx-auto grid md:grid-cols-2">
        <div className="w-full relative h-full">
          <Image
            src="/images/3/3c.svg"
            alt="bike man on helmet"
            quality={100}
            layout="fill"
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
            }}
            className="z-10"
          />
        </div>
        <div className="w-[80%]  md:[w-90%] mx-auto md:mb-40 my-20 p-text">
          <div className=" text-white flex flex-col justify-around gap-5">
            <Fade direction="down" cascade duration={1000}>
              <p className="h2-text font-bold">{t("what_head")}</p>
              <p>{t("what_text_a")}</p> <p>{t("what_text_b")}</p>
              <p>{t("what_text_c")}</p>
            </Fade>
            <div>
              <Link href="#riderForm" className="scroll-smooth">
                <Button text={t("what_button")} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWillYouNeed;
