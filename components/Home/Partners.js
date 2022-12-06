import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Fade } from "react-awesome-reveal";
import LogoScroll from "./LogoScroll";

const Partners = () => {
  const { t, lang } = useTranslation("home");

  return (
    <section className=" mx-auto container grid md:grid-cols-2 ">
      <div className=" flex flex-col gap-10 mt-20">
        <Fade>
          <p className="md:w-[90%] h2-text text-pri_7 font-bold ">
            {t("local_businesses")}
          </p>
        </Fade>
      </div>

      <div>
        <div className="relative">
          <div>
            <img
              src="/images/1/e.svg"
              className="object-cover w-full"
              alt="locations of Texkoop on Map"
            />
          </div>

          <div className="circle  absolute top-1/3 right-1/2 bg-[#F4CC41]"></div>
          <div className="circle  absolute bottom-1/3 left-[67%] bg-[#F4CC41]"></div>
          <div className="circle  absolute bottom-[65%] left-[13%] bg-[#F4CC41]"></div>
          <div className="circle  absolute left-1/3 top-[70%] bg-[#F4CC41]"></div>
          <div className="circle  absolute right-1/3 top-[20%] bg-[#F4CC41]"></div>
          <div className="circle  absolute bottom-[42%] left-[50%] bg-[#F4CC41]"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
