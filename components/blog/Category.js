import React from "react";
import { blog } from "../../utils/data";
import { MdKeyboardArrowRight } from "react-icons/md";

const Category = () => {
  const { category } = blog;
  return (
    <div className="my-10 border border-black p-5">
      <p className="h4-text font font-semibold">Categories</p>
      <div className="my-5  ">
        {category.map((item) => (
          <p className="flex items-center gap-2 my-2" key={item.id}>
            <span>
              <MdKeyboardArrowRight color="#FAA019" />
            </span>
            Lorem Ipsum
          </p>
        ))}
      </div>
    </div>
  );
};

export default Category;
