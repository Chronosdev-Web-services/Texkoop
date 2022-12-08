import Image from "next/image";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { blog } from "../../utils/data";

const RecentPost = () => {
  const { recent } = blog;
  return (
    <>
      <div className="border border-black p-5">
        <p className="font-bold mb-5">Recent Post</p>
        {recent.map((item) => (
          <div className="flex justify-between my-5" key={item.id}>
            <div className="w-[40%]">
              <Image
                src="/images/blog/recent.svg"
                alt="how we stand out"
                className="w-full object-cover"
                width="150"
                height="150"
              />
            </div>
            <div className="w-[55%]">
              <p className="text-[15px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor
              </p>
              <p className="text-[8px] font-medium flex gap-2 items-center">
                <span>
                  <AiOutlineCalendar />
                </span>
                December 7, 2022
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentPost;
