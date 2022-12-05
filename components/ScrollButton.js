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

  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      //   onClick={scrollToTop}
      style={{ display: visible ? "inline " : "none" }}
      className={`fixed duration-1000 scroll-smooth w-[50px] h-[50px] right-[20px] bottom-[50vh] cursor-pointer bg-sec rounded-[50%] z-30 `}
    >
      <BsArrowUp
        className="z-30"
        style={{ display: visible ? "inline " : "none" }}
      />
    </button>
  );
};

export default ScrollButton;
