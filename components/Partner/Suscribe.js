import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../Reusable/Button";

const Suscribe = () => {
  const { t } = useTranslation("partner");
  return (
    <form className="md:w-[70%] grid gap-5 my-10">
      <div>
        <label className="py-2">
          {t("f_name")}
          <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          {t("l_name")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          {t("c_name")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          {t("email")} <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          {t("number")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div className="flex items-center gap-3 w-[2/3]">
        <input
          type="checkbox"
          className="p-3 w-[20px] h-[20px] outline-none rounded-none border-black border"
        />
        <label className="text-xs">
          {t("select")} <span className="text-red-600">*</span>
          {t("required")}
        </label>
      </div>
      <div>
        <Button text={t("button_a")} className="capitalize" />
      </div>
    </form>
  );
};

export default Suscribe;
