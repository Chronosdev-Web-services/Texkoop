import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
const Button = ({ text }) => {
  return (
    <button className="flex gap-2 items-center bg-sec px-3 text-pri py-2">
      {text}
      <BsArrowRight />
    </button>
  );
};

export default Button;
