import useTranslation from "next-translate/useTranslation";
import React from "react";
import { landing } from "../../utils/data";

const Partners = () => {
  const { t, lang } = useTranslation("home");
  const { logos } = landing;

  return (
    <section className="my-20 w-[90%] mx-auto max-w-[1440px] grid md:grid-cols-2">
      <div className=" flex flex-col gap-10 justify-center">
        <p className="w-[90%] h2-text text-pri_7 font-bold ">
          {t("local_businesses")}
        </p>
        <div className="flex gap-3">
          {logos.map((logo) => (
            <div key={logo.id}>
              <img
                src={logo.image}
                alt={logo.alt}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <img
          src="/images/1/e.svg"
          className="object-cover w-full"
          alt="locations of Texkoop on Map"
        />
        <div className="circle  absolute top-1/3 right-1/2 bg-sec"></div>
        <div className="circle  absolute bottom-1/3 left-[67%] bg-[#F4CC41]"></div>
        <div className="circle  absolute bottom-[65%] left-[13%] bg-[#F4CC41]"></div>
        <div className="circle  absolute left-1/3 top-[70%] bg-[#F4CC41]"></div>
        <div className="circle  absolute right-1/3 top-[20%] bg-[#F4CC41]"></div>
        <div className="circle  absolute bottom-[42%] left-[50%] bg-[#F4CC41]"></div>
      </div>
    </section>
  );
};

export default Partners;