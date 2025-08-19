import React from "react";
import Link from "next/link";
import Image from "next/image";
import Holstebro from "../../../../public/footer-assets/Holstebro.png";
import Lemving from "../../../../public/footer-assets/Lemving.png";
import Struer from "../../../../public/footer-assets/Struer.png";
const Footer = () => {
  return (
    <footer className="bg-footer-body pt-18 pb-4 px-[140px]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-centers justify-between w-full">
          <ul className="flex flex-col justify-between">
            <li>
              <Image src={Struer} alt="struer" width={400} height={60} />
            </li>
            <li className="self-start pt-8">
              <p className="font-medium text-lg text-footer">Struer Kommune</p>
              <p className="font-light text-lg text-footer">Østergade 13-15</p>
              <p className="font-light text-lg text-footer">7600 Struer</p>
            </li>
          </ul>
          <ul className="flex flex-col items-start justify-between">
            <li className="">
              <Image src={Holstebro} alt="Holstebro" width={274} height={100} />
            </li>
            <li className="self-center text-center pt-8">
              <p className="font-medium text-lg text-footer">
                Holstebro Kommune
              </p>
              <p className="font-light text-lg text-footer">
                Kirkestræde 11-15
              </p>
              <p className="font-light text-lg text-footer">7500 Holstebro</p>
            </li>
          </ul>
          <ul className="flex flex-col items-start justify-between">
            <li>
              <Image src={Lemving} alt="Lemving" width={400} height={60} />
            </li>
            <li className="self-end text-end pt-8">
              <p className="font-medium text-lg text-footer">Lemvig Kommune</p>
              <p className="font-light text-lg text-footer">Rådhusgade 2</p>
              <p className="font-light text-lg text-footer">7620 Lemvig</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center pt-18 w-full">
          <ul className="flex items-center justify-between text-white w-full">
            <li className="">
              <p className="font-light text-xs text-footer cursor-pointer hover:text-hover-footer transition-colors duration-300">
                © 2023 Klog Energi - Alle rettigheder forbeholdt.
              </p>
            </li>
            <li className="">
              <Link
                href="#"
                className="font-light text-xs pr-40 text-footer cursor-pointer hover:text-hover-footer transition-colors duration-300"
              >
                Cookiepolitik
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-light text-xs text-footer cursor-pointer hover:text-hover-footer transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website by Superego
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
