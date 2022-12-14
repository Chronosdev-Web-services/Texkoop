import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import Button from "../Reusable/Button";
import styles from "../../styles/Check.module.css";
var cities = ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"];
const RideForm = () => {
  const createRider = async (form_values) => {
    const rider = await fetch(`/api/forms/rider/`, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(form_values),
    });
    //it returns status of 201 if it was successfull and 400 if not successfull
    console.log("response status", rider.status);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    var formData = new FormData(e.target);

    const form_values = Object.fromEntries(formData);
    createRider(form_values);
  };
  const { t } = useTranslation("partner");
  // const [form, setForm] = useState({
  //   f_name: "",
  //   l_name: "",
  //   c_name: "",
  //   email: "",
  //   number: "",
  // });
  // const [name, setName] = useState("");
  // const [touched, setTouched] = useState(false);
  // const [valid, setValid] = useState({
  //   f_name: false,
  //   l_name: false,
  //   c_name: false,
  //   email: false,
  //   number: false,
  // });
  // const isValid = name !== "";

  // const UpdateField = (e, field) => {
  //   e.preventDefault();
  //   setForm({ ...form, field: e.target.value });
  // };

  return (
    <form
      id="riderForm"
      onSubmit={submitHandler}
      className=" grid md:grid-cols-2 gap-5 my-10"
    >
      <div className="col-span-2 md:col-span-1">
        <label className="py-2 capitalize">
          {t("f_name")} <span className="text-red-600">*</span>
        </label>
        <input
          required
          type="text"
          name="first_name"
          // onChange={(e) => setName(e.target.value)}
          // onBlur={() => setTouched(true)}
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
        {/* {touched && !isValid && <p className="text-red-600">error</p>} */}
      </div>
      <div className="col-span-2 md:col-span-1">
        <label className="capitalize">
          {t("l_name")}
          <span className="text-red-600">*</span>
        </label>
        <input
          required
          name="last_name"
          type="text"
          // onChange={(e) => UpdateField(e, l_name)}
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="col-span-2 ">
        <label className="capitalize">
          {t("city")}
          <span className="text-red-600 ">*</span>
        </label>
        <select
          required
          name="city"
          className=" w-full p-3 outline-none border-white bg-pri border"
        >
          {cities.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="col-span-2">
        <label className="capitalize">
          {t("email")} <span className="text-red-600">*</span>
        </label>
        <input
          required
          name="email"
          type="email"
          // onChange={(e) => UpdateField(e, email)}
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="col-span-2">
        <label className="capitalize">
          {t("number")} <span className="text-red-600">*</span>
        </label>
        <input
          required
          name="telephone_number"
          type="text"
          // onChange={(e) => UpdateField(e, number)}
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="flex items-center gap-5 col-span-2 ">
        <label className={`${styles.checkbox} `}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
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
