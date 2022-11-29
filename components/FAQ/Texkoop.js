import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Texkoop = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-5">
      <div
        className={`flex duration-300 items-center h4-text font-semibold p-2 border shadow ${
          open && "bg-pri text-white"
        }`}
      >
        <div className="duration-300" onClick={() => setOpen(!open)}>
          {open ? <FiMinus /> : <FiPlus />}
        </div>
        <p className={`w-[80%] ml-auto `}>
          Lorem ipsum dolor sit amet, consectetur{" "}
        </p>
      </div>
      <div className={`duration-300 ${open ? "block" : "hidden"}`}>
        <p className="py-3 w-[80%] ml-auto p-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua. Ut eni Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eius tempor
          incididunt ut labore et dolore magna aliqua. Ut eni
        </p>
      </div>
    </div>
  );
};

export default Texkoop;
