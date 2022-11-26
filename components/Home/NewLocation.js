import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../Reusable/Button";

const NewLocation = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className="max-w-[1440px] mx-auto md:flex">
      <div className="md:min-w-[60%] bg-pri py-5">
        <div className="w-[80%] mx-auto ">
          <div className="w-[80%]  md:[w-90%] text-white grid gap-5 gap-y-5 my-10">
            <p className="uppercase text-sec text-xs lg:text-lg">
              {t("location_top")}
            </p>
            <p className="h2-text font-bold">
              {t("location_headi")}
              <br></br>
              {t("location_headii")}
            </p>
            <p>{t("location_text")}</p>
            <div>
              <Button text={t("location_button")} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full"></div>
    </section>
  );
};

export default NewLocation;
