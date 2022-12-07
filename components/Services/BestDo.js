import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../Reusable/Button";

const BestDo = () => {
  const { t } = useTranslation("services");
  return (
    <section className="w-full relative h-[70vh] my-10">
      <Image
        src="/images/5/5c.svg"
        quality={100}
        fill
        alt="Texkoop delivery lady"
        sizes="100vw"
        className="h-[70vh]"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute top-1/2 -translate-y-1/2 w-full ">
        <div className=" container  text-white w-[95%] mx-auto">
          <div className="mx-10">
            <div className="h1-text font-bold">
              <Fade cascade duration={300}>
                {t("wedo_head")}
              </Fade>
            </div>
            <Fade delay={2500}>
              <p className="h2-text w-[70%] mb-10 mt-5">{t("wedo_text")}</p>
            </Fade>
            <Link href="/partner">
              <Button text={t("button")} className="capitalize" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDo;
