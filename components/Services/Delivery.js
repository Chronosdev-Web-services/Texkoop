import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { CgAddR } from "react-icons/cg";
import { services } from "../../utils/data";

const Delivery = () => {
  const { t } = useTranslation("services");
  const { why_we_stand_out } = services;
  return (
    <section className="">
      <div className="my-10 w-[90%] max-w-[1440px] mx-auto">
        <Fade>
          <p className="md:w-[60%] h2-text font-bold">{t("delivery_head")}</p>
        </Fade>
      </div>
      {why_we_stand_out.map((data) => (
        <div className="my-10" key={data.id}>
          <div>
            <div className="w-full relative h-[70vh]">
              <Image
                src={data.image}
                quality={100}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="w-[90%] mx-auto max-w-[1440px]">
              <div className="w-[60%] my-10">
                <Fade cascade>
                  <p className="h4-text font-bold mb-5">{t(data.head)}</p>
                  <p className="text-base">{t(data.text)}</p>
                </Fade>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className=" my-10 ">
                  <Fade cascade delay={500}>
                    <p className="h4-text font-bold mb-5">{t("scenario")}</p>
                    <p className="text-base">{t(data.scenario)}</p>
                  </Fade>
                </div>
                <div className="my-10">
                  <Fade cascade delay={1000}>
                    <p className="h4-text font-bold mb-5">Solution</p>
                    <p className="text-base">{t(data.solution)}</p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Delivery;
