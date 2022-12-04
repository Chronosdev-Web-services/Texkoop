import useTranslation from "next-translate/useTranslation";
import React from "react";
import { landing } from "../../utils/data";
import Carousel_test from "./Carousel";
import man from "./../../public/images/1/man.svg";
import Image from "next/image";

const TooGood = () => {
  const { too_goood } = landing;
  const { t } = useTranslation("home");

  return (
    <section className="bg-pri  my-20 lg:mb-60">
      <div className="container mx-auto">
        <div className=" w-[90%] mx-auto text-white grid lg:grid-cols-2">
          <div className="relative">
            <div>
              <Image
                src={man}
                alt="delivery man holding parcel"
                className="absolute bottom-0 hidden lg:block"
                priority
              />
            </div>
          </div>
          <div className="my-10">
            <p className="h2-text font-bold">Too Good to be True</p>
            <div className="grid grid-cols-2 mt-5 gap-3">
              {too_goood.map((data) => (
                <div
                  key={data.id}
                  className={`flex gap-2 items-center ${
                    data.id % 2 === 0 ? "" : "justify-"
                  }`}
                >
                  <div>
                    <img src="/icons/tick.svg" />
                  </div>
                  <p>{t(data.text)}</p>
                </div>
              ))}
            </div>
            <div className="my-10">
              <Carousel_test />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TooGood;
