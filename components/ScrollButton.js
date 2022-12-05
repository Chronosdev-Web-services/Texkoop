import React, { useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="relative">
      <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline " : "none" }}
        className={`fixed duration-1000 scroll-smooth 2xl:w-[100px] p-3 2xl:p-5 2xl:h-[100px] w-[50px] h-[50px] right-[20px] bottom-[50vh] cursor-pointer bg-sec rounded-[50%] z-30 `}
      >
        <BsArrowUp
          className="w-full"
          size="100%"
          style={{ display: visible ? "inline " : "none" }}
        />
      </button>
    </div>
  );
};

export default ScrollButton;
