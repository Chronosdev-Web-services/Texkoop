import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const SingleBlog = () => {
  return (
    <div>
      <div className="h-[290px] 2xl:h-[350px] mb-5 relative">
        <Image
          src="/images/blog/single_blog.svg"
          alt="how we stand out"
          className="w-full h-full object-cover bottom-0 "
          width="50"
          height="50"
        />
        <div className="w-[100px] absolute bottom-0 py-2 left-0 z-10 bg-sec text-black flex justify-center items-center">
          <p className="text-[10px] capitalize">lorem ipsum</p>
        </div>
      </div>
      <div>
        <p className="p-text font-[600]">Lorem ipsum dolor sit amen </p>
        <p className="p-small-text">December 7 2022 </p>
        <p className="text-base">
          Lorem dolor sit amet ,consectetur adipiscing elit,sed do eius tempor
          icicdidunt ut labore et dologne magna aliqua ut eni lorem ipsum dolor
          sit amet{" "}
        </p>
        <div className="flex gap-2  items-center">
          <p className="p-tiny-text capitialize"> Read More </p>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
