import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../Reusable/Button";
import bike from "../../public/images/1/f.svg";
import Link from "next/link";

const RideWithUs = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className=" bg-pri relative">
      <div className="hidden lg:block clip2 w-[100px] h-[100px] md:w-[200px] md:h-[200px] top-0 right-0 absolute bg-sec"></div>
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2">
        <div>
          <Image
            src={bike}
            className="w-full object-cover h-full"
            alt="delivery man riding a bike"
          />
        </div>

        <div className="relative">
          <div className="clip2 w-[100px] h-[100px] md:w-[200px] md:h-[200px] top-0 right-0 absolute bg-sec lg:hidden"></div>
          <div className="w-[80%] mx-auto md:[w-90%] text-white flex justify-around  flex-col gap-5 xl:gap-10 gap-y-5 my-20">
            {" "}
            <Fade cascade damping={0.7}>
              <p className="uppercase text-sec nav-text">{t("ride_top")}</p>
              <p className="h2-text font-bold">{t("ride_head")}</p>

              <p>
                {t("ride_texti")} <br></br>
                {t("ride_textii")}
              </p>
            </Fade>
            <div>
              <Link href="/partner">
                <Button text={t("ride_button")} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RideWithUs;
