import React from "react";
import heroBg from "../../../../public/images/hero-img.jpg"; // Adjust the path as necessary
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen relative place-content-center overflow-hidden">
      <div className=" relative inline-block py-4 pl-4">
        <Image
          src={heroBg}
          alt="Klog Energi"
          className="rounded-lg clip-path-left"
          style={{ objectFit: "cover" }}
          width={980}
          height={700}
          quality={100}
        />
        <div className="absolute inset-0 bg-green/50 rounded-lg"></div>
        <Image
          src="/hero-gif/hero-title.gif"
          alt="Hero animation"
          width={800}
          height={300}
          className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-full h-40"
          priority
        />
      </div>
    </section>
  );
};
export default Hero;
