import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../Reusable/Button";

const PartnerWithUs = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className=" bg-pri">
      <div className="max-w-[1440px] mx-auto md:flex">
        <div className="md:min-w-[60%]  py-5">
          <div className="w-[80%] mx-auto ">
            <div className="w-[80%]  md:[w-90%] text-white grid gap-5 gap-y-5 my-10">
              <p className="uppercase text-sec text-xs lg:text-lg">
                {t("partner_top")}
              </p>
              <p className="h2-text font-bold">{t("location_text")}</p>

              <div>
                <Button text={t("partner_button")} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative hidden ">
          <img
            src="/images/1/j.svg"
            alt="delivery woman"
            className="absolute -bottom-[225px] w-[80%] xl:-bottom-[400px] "
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
