import React from "react";
import { landing } from "../../utils/data";
const delay = 4000;
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const Carousel_test = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  const { testimonial } = landing;
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {testimonial.map((item, index) => (
          <div className="slide" key={index} cl>
            <div>
              <div className="grid grid-cols-5 gap-5">
                <div className="">
                  <div className="">
                    <img
                      src="/images/1/f.svg"
                      className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-[50%] object-cover"
                      alt="testimonial picture"
                    />
                  </div>
                </div>
                <div className="col-span-3 h-full">
                  <p className="p-text">{item.name}</p>
                  <p className="my-2 uppercase text-xs">{item.title}</p>
                  <p className="mt-5 text-base undo_wrap whitespace-normal">
                    {item.text}
                  </p>
                </div>
                <div className="">
                  <img
                    src="/images/1/quotes.svg"
                    alt="what they say quotes"
                    className="w-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot h-[15px] w-[15px] md:h-[20px] md:w-[20px]${
              index === idx ? " active" : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel_test;
