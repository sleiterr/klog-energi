import React from "react";
import Link from "next/link";
import Image from "next/image";
import Holstebro from "../../../../public/footer-assets/Holstebro.png";
import Lemving from "../../../../public/footer-assets/Lemving.png";
import Struer from "../../../../public/footer-assets/Struer.png";

const Footer = () => {
  return (
    <footer className="bg-footer-body pt-18 pb-4 md:px-20 px-4 xl:px-[8.74rem]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-centers justify-between w-full flex-col md:flex-row">
          <ul className="flex flex-col items-center justify-between">
            <FooterItem
              src={Struer}
              alt="Struer"
              textClassName={"self-center md:self-start text-left pt-8"}
              title="Struer Kommune"
              street="Østergade 13-15"
              city="7600 Struer"
              imageClassName={"w-[400px] h-[60px] mt-4"}
            />
          </ul>
          <ul className="flex flex-col md:items-start items-center">
            <FooterItem
              src={Holstebro}
              alt="Holstebro"
              textClassName={"self-center text-center pt-8"}
              title="Holstebro Kommune"
              street="Kirkestræde 11-15"
              city="7500 Holstebro"
              imageClassName={"w-[274px] h-[100px]"}
            />
          </ul>
          <ul className="flex flex-col md:items-start justify-between items-center">
            <FooterItem
              src={Lemving}
              alt="Lemving"
              title="Lemvig Kommune"
              street="Rådhusgade 2"
              city="7620 Lemvig"
              imageClassName={"w-[400px] h-[60px] mt-4"}
              textClassName={"md:self-end self-center text-end pt-8"}
            />
          </ul>
        </div>
        <div className="flex items-center justify-center pt-18 w-full">
          <ul className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between text-white w-full">
            <li className="w-1/3">
              <p className="font-light text-xs text-footer cursor-pointer hover:text-hover-footer transition-colors duration-300">
                © 2023 Klog Energi - Alle rettigheder forbeholdt.
              </p>
            </li>
            <li className="w-1/3 text-center">
              <Link
                href="#"
                className="font-light text-xs text-footer cursor-pointer hover:text-hover-footer transition-colors duration-300"
              >
                Cookiepolitik
              </Link>
            </li>
            <li className="w-1/3 text-right">
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

const FooterItem = ({
  src,
  alt,
  title,
  street,
  city,
  imageClassName,
  textClassName,
}) => {
  return (
    <>
      <li className="flex flex-col items-end justify-between h-full">
        <div className="">
          <Image src={src} alt={alt} className={imageClassName} />
        </div>
        <div className={textClassName}>
          <p className="font-medium text-lg text-footer">{title}</p>
          <p className="font-light text-lg text-footer">{street}</p>
          <p className="font-light text-lg text-footer">{city}</p>
        </div>
      </li>
    </>
  );
};
