import React from "react";
import heroBg from "../../../../public/images/hero-img.jpg"; // Adjust the path as necessary
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen relative place-content-center overflow-hidden">
      <div className="">
        <Image src={heroBg} alt="Klog Energi" objectFit="cover" className="" />
        <div className="absolute inset-0 bg-green-800/60"></div>
      </div>
    </section>
  );
};

export default Hero;
