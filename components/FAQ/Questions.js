import useTranslation from "next-translate/useTranslation";
import React from "react";
import Texkoop from "./Texkoop";

const Questions = () => {
  const { t } = useTranslation("faq");
  return (
    <section className="mx-auto w-[90%] max-w-1440px">
      <div className="my-10 grid gap-3 w-2/3">
        <p className="text-sec nav-text">{t("body_top")}</p>
        <p className="h2-text font-bold">{t("body_head")}</p>
        <p className="p-text ">{t("body_text")}</p>
      </div>
      <div className="md:w-2/3">
        <Texkoop />
      </div>
    </section>
  );
};

export default Questions;
