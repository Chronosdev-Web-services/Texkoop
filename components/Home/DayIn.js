import React from "react";
import useTranslation from "next-translate/useTranslation";
import Button from "../Reusable/Button";
import Link from "next/link";

const DayIn = () => {
  const { t, lang } = useTranslation("home");
  return (
    <section className=" text-white bg-sec md:my-40 md:mb-60">
      <div className="day_in  ">
        <div className="container mx-auto ">
          <div className="py-10">
            <div className="mx-auto  pt-10">
              <p className="h2-text font-bold">{t("day_head")}</p>
              <p className="p-small-text my-5 w-[70%]">{t("day_text")}</p>
              <Link href="/partner">
                <Button text={t("common:Nav5")} className="mb-5" />
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default DayIn;
