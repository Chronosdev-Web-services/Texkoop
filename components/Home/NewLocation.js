import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../Reusable/Button";
import bike from "../../public/images/3/3b.svg";
import Link from "next/link";

const NewLocation = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className=" bg-pri relative">
      <div className="clip w-[100px] h-[100px] top-0 left-0 absolute bg-sec"></div>
      <div className="max-w-[1440px] mx-auto md:flex ">
        <div className="md:w-[55%] grid  place-items-center">
          <div className="w-[80%] ">
            <div className="  md:[w-90%] text-white mt-auto grid gap-5 my-10">
              <Fade cascade damping={0.4}>
                <p className="uppercase text-sec nav-text mt-20">
                  {t("location_top")} ?
                </p>
                <p className="h2-text font-bold mb-5">
                  {t("location_headi")}
                  <br></br>
                  {t("location_headii")}
                </p>
                <p className="my-5">{t("location_text")}</p>
              </Fade>
              <div>
                <Link href="/partner">
                  <Button text={t("location_button")} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[45%] relative bg-white ">
          <Image
            src={bike}
            alt="bike man on helmet"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default NewLocation;
