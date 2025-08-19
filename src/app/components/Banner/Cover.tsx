import React from "react";
import Img from "next/image";
import Banner from "../../../../public/images/klog-energi.jpg"; // Adjust the path as necessary

type Props = {
  title: string;
  src: string;
  preloadImage?: boolean;
};

const BannerCover = ({ preloadImage }: Props) => {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* <div className="relative z-10 max-w-5xl mx-auto px-4 py-[120px]"></div> */}
      <Img
        src={Banner}
        alt=""
        fill
        className="object-cover rounded-lg"
        priority={preloadImage}
      />
    </section>
  );
};

export default BannerCover;
