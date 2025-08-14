import React from "react";
import Image from "next/image";
import Holstebro from "../../../../public/footer-assets/Holstebro.png";
import Lemving from "../../../../public/footer-assets/Lemving.png";
import Struer from "../../../../public/footer-assets/Struer.png";
const Footer = () => {
  return (
    <div className="w-full h-[100px] bg-gray-800 text-white flex flex-col justify-center items-center">
      <div className="flex items-center justify-center">
        <ul>
          <li>
            <Image src={Struer} alt="" width={480} height={60} />
          </li>
          <li>
            <p>Struer Kommune</p>
          </li>
          <li>
            <p>Østergade 13-15</p>
          </li>
          <li>
            <p>7600 Struer</p>
          </li>
        </ul>
        <ul>
          <li>
            <Image src={Holstebro} alt="" width={480} height={60} />
          </li>
          <li>
            <p>Holstebro Kommune</p>
          </li>
          <li>
            <p>Kirkestræde 11-15</p>
          </li>
          <li>
            <p>7500 Holstebro</p>
          </li>
        </ul>
        <ul>
          <li>
            <Image src={Lemving} alt="" width={480} height={60} />
          </li>
          <li>
            <p>Lemvig Kommune</p>
          </li>
          <li>
            <p>Rådhusgade 2</p>
          </li>
          <li>
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
