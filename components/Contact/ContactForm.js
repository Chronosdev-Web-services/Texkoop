import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../Reusable/Button";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <section className="w-[90%] lg:w-[80%] mx-auto max-w-[1440px]">
      <form className="md:grid md:grid-cols-2 gap-5 gap-y-5 my-10 capitalize">
        <div className="my-5 md:my-0">
          <label className="py-2 p-text font-bold  ">
            {t("partner:f_name")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="w-full p-3 outline-none border-black border"
          />
        </div>
        <div className="my-5 md:my-0">
          <label className="p-text font-bold  ">
            {t("partner:l_name")}
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="w-full p-3 outline-none border-black border"
          />
        </div>
        <div className="my-5 md:my-0">
          <label className="p-text font-bold  ">
            {t("partner:number")} <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="w-full p-3 outline-none border-black border"
          />
        </div>
        <div className="my-5 md:my-0">
          <label className="p-text font-bold  ">
            {t("partner:email")} <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            className="w-full p-3 outline-none border-black border"
          />
        </div>
        <div className="col-span-2 my-5 md:my-0">
          <label className="p-text font-bold  ">
            {t("partner:message")} <span className="text-red-600">*</span>
          </label>
          <textarea
            className="w-full p-3 outline-none border-black border"
            rows="7"
          />
        </div>

        <div>
          <Button text={t("contact:contact_button")} />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
