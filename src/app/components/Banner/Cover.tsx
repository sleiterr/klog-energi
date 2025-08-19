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
    <section className="w-full overflow-hidden">
      {/* <div className="relative z-10 max-w-5xl mx-auto px-4 py-[120px]"></div> */}
      <div className="relative w-full h-[800px]">
        <div className="absolute inset-0">
          <Img
            src={Banner}
            alt=""
            layout="fill"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            priority={preloadImage}
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="387"
          height="800"
          viewBox="0 0 387 800"
          fill="none"
          className="absolute inset-0"
        >
          <path
            d="M386.584 0H0V418.842V800H328.304C269.919 799.97 244.684 785.514 233.135 715.578L214.863 590.628C196.591 477.721 111.323 405.293 0 418.842L277.461 53.8606C303.177 19.905 343.612 0 386.584 0Z"
            fill="#1D3F33"
          />
          <path
            d="M387 799.882H338.198C334.927 799.957 331.751 799.999 328.667 800H387V799.882Z"
            fill="#1D3F33"
          />
        </svg>
      </div>
    </section>
  );
};

export default BannerCover;
