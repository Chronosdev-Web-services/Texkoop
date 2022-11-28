import React from "react";
import Button from "../Reusable/Button";

const RideForm = () => {
  return (
    <form className=" grid md:grid-cols-2 gap-5 my-10">
      <div>
        <label className="py-2">
          First Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div>
        <label className="">
          Last Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="col-span-2 ">
        <label className="">
          Select City <span className="text-red-600 ">*</span>
        </label>
        <select className=" w-full p-3 outline-none border-white bg-transparent border">
          <option>Marseille</option>{" "}
        </select>
      </div>
      <div className="col-span-2">
        <label className="">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="col-span-2">
        <label className="">
          Telephone Number <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-white bg-transparent border"
        />
      </div>
      <div className="flex items-center gap-5 col-span-2">
        <input
          type="checkbox"
          className=" p-3 w-[20px] h-[20px] outline-none border-white bg-transparent border"
        />
        <label className="text-base">
          We collect this data for the purposes of processing your application.
          By clicking this box, you acknowledge that you have read and
          understood the privacy policy and terms of service.*Required
          <span className="text-red-600">*</span>
          Required
        </label>
      </div>
      <div>
        <Button text="Apply" />
      </div>
    </form>
  );
};

export default RideForm;
