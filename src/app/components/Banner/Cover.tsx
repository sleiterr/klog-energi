import React from "react";
import Img from "next/image";
import Banner from "../../../../public/images/klog-energi.jpg"; // Adjust the path as necessary

const BannerCover = () => {
  return (
    <section className="w-full h-screen relative">
      <div className="Klog Energi">
        <Img src={Banner} alt="" fill className="object-cover" priority />
      </div>
    </section>
  );
};

export default BannerCover;
