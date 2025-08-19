import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-transparent top-[40px] right-1/2 translate-x-1/2 absolute z-10 after:content-[''] after:w-[600px] after:h-[1px] after:inline-block after:align-middle after:bg-[#E4EADC] after:absolute after:left-1/2 after:-translate-x-1/2">
      <nav className="flex justify-center items-center h-[60px]">
        <ul className="flex justify-center items-center gap-8 list-none">
          <HeaderItem href="#about">Om Debatten</HeaderItem>
          <HeaderItem href="#debate">Program</HeaderItem>
          <HeaderItem href="/">Vores tilbud</HeaderItem>
          <HeaderItem href="/">Den grønne omstilling</HeaderItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const HeaderItem = ({ href, children }) => (
  <li className=" font-normal text-lg">
    <Link
      href={href}
      className="no-underline text-primary hover:text-hover transition-colors duration-300"
    >
      {children}
    </Link>
  </li>
);
