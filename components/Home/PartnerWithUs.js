import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Button from "../Reusable/Button";
import man from "./../../public/images/1/j.svg";
import styles from "../../styles/z_index.module.css";

const PartnerWithUs = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className="bg-sec relative md:my-40">
      <div className=" blue_clip ">
        <div className="container mx-auto md:flex">
          <div className="md:min-w-[60%]  py-10">
            <div className="w-[80%] mx-auto ">
              <div className="w-[80%]  md:[w-90%] text-white grid gap-5 gap-y-5 my-10">
                <p className="uppercase text-sec nav-text">
                  {t("partner_top")}
                </p>
                <Slide duration={1000}>
                  <p className="h2-text font-bold">{t("location_text")}</p>
                </Slide>

                <div>
                  <Link href="/partner">
                    <Button text={t("partner_button")} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-[40%]"></div>
        </div>
      </div>
      <div>
        <Image
          src={man}
          alt="delivery woman"
          className={`${styles.picture} absolute bottom-0 right-1/3 translate-x-1/2  hidden w-[40%] lg:w-[35%] 2xl:w-[20%] md:block`}
        />
      </div>
    </section>
  );
};

export default PartnerWithUs;
