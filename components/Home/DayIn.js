import React from "react";
import useTranslation from "next-translate/useTranslation";
import Button from "../Reusable/Button";

const DayIn = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className=" text-white bg-sec ">
      <div className="max-w-[1440px] mx-auto">
        <div className="day_in py-10">
          <div className="mx-auto w-[80%] pt-10">
            <p className="h2-text font-bold">{t("day_head")}</p>
            <p className="p-text my-5 w-[70%]">{t("day_text")}</p>
            <Button text={t("common:Nav5")} className="mb-5" />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default DayIn;
