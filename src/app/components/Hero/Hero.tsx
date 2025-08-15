import React from "react";
import heroBg from "../../../../public/images/hero-img.jpg"; // Adjust the path as necessary
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen relative place-content-center overflow-hidden">
      {" "}
      <div className="pt-4 pl-4">
        {" "}
        <div className=" relative inline-block">
          {" "}
          <Image
            src={heroBg}
            alt="Klog Energi"
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />{" "}
          <div className="absolute inset-0 bg-green-800/60 rounded-lg"></div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Hero;
