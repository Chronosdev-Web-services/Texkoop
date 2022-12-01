import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Button = ({ text }) => {
  return (
    <button className="btn-21 ">
      <span className="flex gap-2 items-center  py-2">
        {text}
        <BsArrowRight />
      </span>
    </button>
  );
};

export default Button;
