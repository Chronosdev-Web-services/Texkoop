import useTranslation from "next-translate/useTranslation";
import React from "react";
import Button from "../Reusable/Button";

const RideForm = () => {
  const { t } = useTranslation("partner");
  return (
    <form className=" grid md:grid-cols-2 gap-5 my-10">
      <div>
        <label className="py-2">
          {t("f_name")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div>
        <label className="">
          {t("l_name")}
          <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="col-span-2 ">
        <label className="">
          {t("city")}
          <span className="text-red-600 ">*</span>
        </label>
        <select className=" w-full p-3 outline-none border-white bg-transparent border">
          <option>Marseille</option>{" "}
        </select>
      </div>
      <div className="col-span-2">
        <label className="">
          {t("email")} <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="col-span-2">
        <label className="">
          {t("number")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="flex items-center gap-5 col-span-2 ">
        <input
          type="checkbox"
          className="w-[20px] h-[20px] outline-none rounded-none border-black border"
        />
        <label className="text-xs">
          {t("select_2")}
          <span className="text-red-600">*</span>
          {t("required")}
        </label>
      </div>
      <div>
        <Button text="Apply" />
      </div>
    </form>
  );
};

export default RideForm;
