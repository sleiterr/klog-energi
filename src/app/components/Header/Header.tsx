import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute w-full bg-transparent top-[40px] right-[40px] z-10 after:content-[''] after:w-[40%] after:h-[1px] after:inline-block after:align-middle after:bg-white">
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
