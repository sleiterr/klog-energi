import React from "react";
import Image from "next/image";
import Holstebro from "../../../../public/footer-assets/Holstebro.png";
import Lemving from "../../../../public/footer-assets/Lemving.png";
import Struer from "../../../../public/footer-assets/Struer.png";
const Footer = () => {
  return (
    <div className="bg-debate-gradient pt-18 px-[140px]">
      <div className="flex items-centers justify-between">
        <ul className="flex flex-col justify-between h-full">
          <li>
            <Image src={Struer} alt="" width={400} height={60} />
          </li>
          <li className="self-start">
            <p>Struer Kommune</p>
            <p>Østergade 13-15</p>
            <p>7600 Struer</p>
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-between">
          <li>
            <Image src={Holstebro} alt="" width={400} height={60} />
          </li>
          <li className="self-start">
            <p>Holstebro Kommune</p>
            <p>Kirkestræde 11-15</p>
            <p>7500 Holstebro</p>
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-between">
          <li>
            <Image src={Lemving} alt="" width={400} height={60} />
          </li>
          <li className="self-start">
            <p>Lemvig Kommune</p>
            <p>Rådhusgade 2</p>
            <p>7620 Lemvig</p>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex items-center justify-center text-white">
          <li>
            <p>© 2023 Klog Energi - Alle rettigheder forbeholdt.</p>
          </li>
          <li>
            <p>Cookiepolitik</p>
          </li>
          <li>
            <p>Website by Superego</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
