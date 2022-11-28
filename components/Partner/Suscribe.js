import React from "react";
import Button from "../Reusable/Button";

const Suscribe = () => {
  return (
    <form className="md:w-[70%] grid gap-5 my-10">
      <div>
        <label className="py-2">
          First Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          Last Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          Company Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div>
        <label className="">
          Telephone Number <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full p-3 outline-none border-black border"
        />
      </div>
      <div className="flex items-center gap-3 w-[2/3]">
        <input
          type="checkbox"
          className=" p-3 w-[20px] h-[20px] outline-none border-black border"
        />
        <label className="text-base">
          I agree to receive information regarding when Texkoop starts operation
          via e-mail and Telephone. <span className="text-red-600">*</span>
          Required
        </label>
      </div>
      <div>
        <Button text="let me know" className="capitalize" />
      </div>
    </form>
  );
};

export default Suscribe;
