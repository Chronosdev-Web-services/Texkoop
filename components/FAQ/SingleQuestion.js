import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
const SingleQuestion = () => {
  const [open, setOpen] = useState();

  return (
    <div className="my-5">
      <div
        className={`flex duration-700 transition-duration ease-linear items-center h4-text font-semibold p-2 border shadow ${
          open && "bg-pri text-white"
        }`}
      >
        <div
          className="duration-1000 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiMinus /> : <FiPlus />}
        </div>
        <p className={`w-[80%] ml-auto `}>
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      {open && (
        <div className={`duration-1000 `}>
          <p className="py-3 w-[80%] ml-auto p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut eni Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut eni
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleQuestion;
