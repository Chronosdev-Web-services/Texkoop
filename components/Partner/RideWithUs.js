import Image from "next/image";
import React from "react";
import RideForm from "./RideForm";

const RideWithUs = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <p className="h2-text font-bold text-pri my-5 w-[90%] mx-auto">
        Ride With Us
      </p>
      <div className="bg-pri grid md:grid-cols-2">
        <div className="text-white w-[80%] mx-auto my-5">
          <p className="h2-text font-bold">Apply now</p>
          <p className="p-text">
            No Prior Experience is required. However, honesty and commitment to
            excellence and customer satisfaction is ideally a top requirement
            with ask.
          </p>
          <RideForm />
        </div>
        <div className="w-full relative h-[400px] md:h-full">
          <Image
            src="/images/3/3b.svg"
            alt="bike man on helmet"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default RideWithUs;
