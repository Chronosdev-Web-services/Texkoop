import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FAQ } from "../../utils/data";

const Texkoop = () => {
  const { questions } = FAQ;
  const [open, setOpen] = useState({});
  const handleClick = (id) => {
    setOpen(!open);
    console.log(id);
  };
  return (
    <section className="my-10">
      {questions.map((item) => (
        <div key={item.id} className="my-20">
          <div>
            <p className="h2-text">{item.text}</p>
          </div>
          {item.data.map((data) => (
            <div className="my-5" key={data.id}>
              <div
                className={`flex duration-700 transition-duration ease-linear items-center h4-text font-semibold p-2 border shadow ${
                  open && "bg-pri text-white"
                }`}
              >
                <div
                  className="duration-1000 cursor-pointer"
                  onClick={() => handleClick(data)}
                >
                  {open ? <FiMinus /> : <FiPlus />}
                </div>
                <p className={`w-[80%] ml-auto `}>
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </p>
              </div>
              <div className={`duration-1000 ${open ? "block" : "hidden"}`}>
                <p className="py-3 w-[80%] ml-auto p-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore et dolore magna aliqua. Ut
                  eni Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eius tempor incididunt ut labore et dolore magna
                  aliqua. Ut eni
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Texkoop;
