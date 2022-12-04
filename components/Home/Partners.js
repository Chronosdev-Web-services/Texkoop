import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { landing } from "../../utils/data";

const Partners = () => {
  const { t, lang } = useTranslation("home");
  const { logos } = landing;

  return (
    <section className="my-20 w-[90%] mx-auto max-w-[1440px] grid md:grid-cols-2 ">
      <div className=" flex flex-col gap-10 justify-center">
        <Fade>
          <p className="md:w-[90%] h2-text text-pri_7 font-bold ">
            {t("local_businesses")}
          </p>
        </Fade>
        <div className="flex md:animate-slide2  mt-4 overflow-hidden">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className=" md:w-[350px]  ml-[10px]  hover:scale-110 transition-transform"
            >
              <div>
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className=""
                  width="350"
                  height="250"
                  layout="responsive"
                />
              </div>
            </div>
          ))}
        </div>
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
          <div className="circle  absolute top-1/3 right-1/2 bg-sec"></div>
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
