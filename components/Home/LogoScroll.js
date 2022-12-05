import React from "react";
import { landing } from "../../utils/data";
import Image from "next/image";

const LogoScroll = () => {
  const { logos } = landing;
  return (
    <section>
      <div className="flex animate-slide2 items-center overflow-hidden">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className=" w-[350px] h-[250px] ml-[50px]   transition-transform"
          >
            <div>
              <Image
                src={logo.image}
                alt={logo.alt}
                className="h-[250px]"
                width="350"
                height="250"
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoScroll;
