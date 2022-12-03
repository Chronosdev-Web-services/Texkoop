import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import Button from "../Reusable/Button";

const RideForm = () => {
  const { t } = useTranslation("partner");
  const [form, setForm] = useState({
    f_name: "",
    l_name: "",
    c_name: "",
    email: "",
    number: "",
  });
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const [valid, setValid] = useState({
    f_name: false,
    l_name: false,
    c_name: false,
    email: false,
    number: false,
  });
  const isValid = name !== "";

  const UpdateField = (e, field) => {
    e.preventDefault();
    setForm({ ...form, field: e.target.value });
  };

  return (
    <form className=" grid md:grid-cols-2 gap-5 my-10">
      <div>
        <label className="py-2">
          {t("f_name")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched(true)}
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
        {touched && !isValid && <p className="text-red-600">error</p>}
      </div>
      <div>
        <label className="">
          {t("l_name")}
          <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          value={form.l_name}
          onChange={(e) => UpdateField(e, l_name)}
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
          value={form.email}
          onChange={(e) => UpdateField(e, email)}
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="col-span-2">
        <label className="">
          {t("number")} <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          value={form.number}
          onChange={(e) => UpdateField(e, number)}
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
        <Button text="Apply" onClick={() => console.log(form)} />
      </div>
    </form>
  );
};

export default RideForm;
