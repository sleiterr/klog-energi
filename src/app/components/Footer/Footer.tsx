import React from "react";
import Image from "next/image";
import Holstebro from "../../../../public/footer-assets/Holstebro.png";
import Lemving from "../../../../public/footer-assets/Lemving.png";
import Struer from "../../../../public/footer-assets/Struer.png";
const Footer = () => {
  return (
    <footer className="bg-debate-gradient pt-18 pb-4 px-[140px]">
      <div className="flex items-centers justify-between">
        <ul className="flex flex-col justify-between">
          <li>
            <Image src={Struer} alt="" width={400} height={60} />
          </li>
          <li className="self-start pt-8">
            <p className="font-medium text-lg text-footer">Struer Kommune</p>
            <p className="font-light text-lg text-footer">Østergade 13-15</p>
            <p className="font-light text-lg text-footer">7600 Struer</p>
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-between">
          <li className="">
            <Image src={Holstebro} alt="" width={274} height={100} />
          </li>
          <li className="self-center text-center pt-8">
            <p className="font-medium text-lg text-footer">Holstebro Kommune</p>
            <p className="font-light text-lg text-footer">Kirkestræde 11-15</p>
            <p className="font-light text-lg text-footer">7500 Holstebro</p>
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-between">
          <li>
            <Image src={Lemving} alt="" width={400} height={60} />
          </li>
          <li className="self-end text-end pt-8">
            <p className="font-medium text-lg text-footer">Lemvig Kommune</p>
            <p className="font-light text-lg text-footer">Rådhusgade 2</p>
            <p className="font-light text-lg text-footer">7620 Lemvig</p>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center pt-18">
        <ul className="flex items-center justify-between text-white w-full">
          <li className="">
            <p className="font-light text-xs text-footer">
              © 2023 Klog Energi - Alle rettigheder forbeholdt.
            </p>
          </li>
          <li className="">
            <p className="font-light text-xs text-footer">Cookiepolitik</p>
          </li>
          <li>
            <p className="font-light text-xs text-footer">
              Website by Superego
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
