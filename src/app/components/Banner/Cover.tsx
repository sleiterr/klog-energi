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
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <Img
          src={Banner}
          alt=""
          fill={true}
          objectFit="contain"
          priority={preloadImage}
        />
      </div>
    </section>
  );
};

export default BannerCover;
