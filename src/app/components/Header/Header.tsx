import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-transparent top-[40px] right-[80px] absolute z-10 after:content-[''] after:w-[600px] after:h-[1px] after:inline-block after:align-middle after:bg-[#E4EADC] after:absolute after:left-1/2 after:-translate-x-1/2">
      <nav className="flex justify-center items-center h-[60px]">
        <ul className="flex justify-center items-center gap-8 list-none">
          <li className=" font-normal text-lg text-white">
            <Link href="#" className="no-underline">
              Om Debatten
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="no-underline font-normal text-lg text-white"
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="no-underline font-normal text-lg text-white"
            >
              Vores tilbud
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="no-underline font-normal text-lg text-white"
            >
              Den grønne omstilling
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
