import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Fade } from "react-awesome-reveal";

const MakeItHappen = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className="mx-auto container w-[90%] my-10 ">
      <p className="h2-text text-pri my-5 font-bold">{t("happen_head")}</p>
      <Fade cascade damping={0.8}>
        <div className="relative">
          <div className="  md:grid-cols-4 grid gap-5 md:gap-10 p-text text-pri">
            <div className="mx-auto ">
              <div className="how_we_do ">
                <img
                  src="/images/1/gi.svg"
                  className="w-full object-containt-contain "
                />
              </div>
              <p className="font-bold my-3 text-center">{t("happen_1")}</p>
            </div>
            <div>
              <div className="">
                {/* <img
                  src="/images/1/arrow_1.svg"
                  className="object-contain rotate-90 w-[50%] ml-auto md:w-full md:rotate-0"
                /> */}
              </div>
            </div>
            <div className="mx-auto">
              <div className="how_we_do">
                <img src="/images/1/gii.svg" className="w-full  " />
              </div>
              <p className="font-bold my-3 text-center">{t("happen_2")}</p>
            </div>

            {/* side arrow  */}

            <div className=" row-span-2 items center flex md:flex-start">
              {/* <img
                src="/images/1/arrow-down.svg"
                className="object-containt-contain w-[40%] ml-auto md:w-[80%]"
              /> */}
            </div>
            {/* side arrow  */}
            {/* second row */}

            <div className="mx-auto">
              <div className="how_we_do">
                <img
                  src="/images/1/giii.svg"
                  className="w-full object-containt-contain "
                />
              </div>
              <p className="font-bold my-3 text-center">{t("happen_3")}</p>
            </div>
            <div>
              <div className="">
                {/* <img
                  src="/images/1/arrow_1.svg"
                  className="w-[50%] md:w-full flex ml-auto rotate-90 object-containt-contain md:rotate-180"
                /> */}
              </div>
              <p className=""></p>
            </div>
            <div className="mx-auto">
              <div className="how_we_do">
                <img src="/images/1/giv.svg" className="w-full  " />
              </div>
              <p className="font-bold my-3 text-center">{t("happen_4")}</p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default MakeItHappen;
