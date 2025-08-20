"use client";

import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

  const navBarClasses = clsx(
    "w-full top-0 right-1/2 translate-x-1/2 absolute z-10",
    !scrolled &&
      "top-[40px] after:content-[''] after:w-[600px] after:h-[1px] after:inline-block after:align-middle after:bg-[#E4EADC] after:absolute after:left-1/2 after:-translate-x-1/2 bg-transparent",
    scrolled && "fixed bg-[#72C183] shadow-md w-full z-10"
  );

  return (
    <header className={navBarClasses}>
      <nav className="flex justify-center items-center h-[60px]">
        <ul className="flex justify-center items-center gap-8 list-none">
          <HeaderItem to="about">Om Debatten</HeaderItem>
          <HeaderItem to="debate">Program</HeaderItem>
          <HeaderItem to="featured">Vores tilbud</HeaderItem>
          <HeaderItem to="Energi">Den grønne omstilling</HeaderItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const HeaderItem = ({ children, to }) => (
  <li className=" font-normal text-lg">
    <ScrollLink
      to={to}
      smooth={true}
      duration={800}
      offset={10}
      className="no-underline text-primary hover:text-hover transition-colors duration-300 cursor-pointer"
    >
      {children}
    </ScrollLink>
  </li>
);
