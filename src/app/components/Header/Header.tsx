"use client";

import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import clsx from "clsx";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/compat/router";
import BurgerMenu from "../BurgerMneu/BurgerMneu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const { scrollY } = useScroll();
  // const handleLinkClick = () => setMenuOpen(false);

  console.log("pathname", pathname, "isHome", isHome);
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [isHome]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isHome) return;
    console.log("Page scroll: ", latest);

    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest == 0 && scrolled) {
      setScrolled(false);
    }
  });

  // Close menu on link click
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [menuOpen]);

  // useEffect(() => {
  //   console.log("router", router.pathname, "isHome", isHome);
  // }, [router.pathname, isHome]);

  useEffect(() => {
    console.log("scrolled change ->", scrolled);
  }, [scrolled]);

  const defaultClasses =
    "flex justify-center items-center h-[30px] md:h-[60px] w-full";

  const navBarClasses = clsx(
    "py-2 z-10 transition-all duration-300 ease-in-out ",
    "absolute md:right-1/2 md:translate-x-1/2 w-full",
    !scrolled &&
      "top-[10px] md:top-[40px]  after:content-[''] after:w-[600px] after:h-[1px] after:align-middle after:bg-[#E4EADC] after:absolute after:left-1/2 after:-translate-x-1/2 md:bg-transparent after:hidden md:after:block",
    scrolled && "fixed bg-[#72C183] shadow-md z-10 w-full py-4"
  );

  return (
    <>
      <header className={navBarClasses}>
        {/* Desktop Navigation */}
        <nav className={clsx(defaultClasses, "hidden lg:flex justify-center")}>
          <ul className="flex gap-8 list-none">
            <HeaderItem to="about">Om Debatten</HeaderItem>
            <HeaderItem to="debate">Program</HeaderItem>
            <HeaderItem to="featured">Vores tilbud</HeaderItem>
            <HeaderItem to="Energi">Den grønne omstilling</HeaderItem>
          </ul>
        </nav>
        {/* Mobile Navigation */}
        <nav
          className={clsx(
            defaultClasses,
            "lg:hidden flex flex-col items-start gap-6 w-full"
          )}
        ></nav>
      </header>
        <div className="fixed z-[1200] right-[30px] top-[10px] md:hidden">
          <BurgerMenu
            scrolled={scrolled}
            isOpen={menuOpen}
            toggleMenu={() => setMenuOpen((prev) => !prev)}
          />
        </div>
      {menuOpen && (
        <div
          className={clsx(
            "fixed top-0 bottom-0 right-0 left-0 z-40",
            "w-full h-full",
            "bg-emerald-600/90",
            "flex flex-col justify-center items-center",
            "gap-10",
            "transition-all duration-300",
            {
              "opacity-0 -translate-y-5 pointer-events-none": !menuOpen,
              "opacity-100 translate-y-0 pointer-events-auto": menuOpen,
            }
          )}
          onClick={() => setMenuOpen(false)}
        >
          <ul className="list-none">
            <HeaderItem
              to="about"
              className="text-zinc-700"
              onClick={() => setMenuOpen(false)}
            >
              Om Debatten
            </HeaderItem>
            <HeaderItem
              to="debate"
              className="text-zinc-700"
              onClick={() => setMenuOpen(false)}
            >
              Program
            </HeaderItem>
            <HeaderItem
              to="featured"
              className="text-zinc-700"
              onClick={() => setMenuOpen(false)}
            >
              Vores tilbud
            </HeaderItem>
            <HeaderItem
              to="Energi"
              className="text-zinc-700"
              onClick={() => setMenuOpen(false)}
            >
              Den grønne omstilling
            </HeaderItem>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

type HeaderItemProps = {
  children: React.ReactNode;
  to: string;
  className?: string;
  onClick?: () => void;
};

const HeaderItem = ({ children, to, onClick, className }: HeaderItemProps) => (
  <li className=" font-normal text-lg">
    <ScrollLink
      to={to}
      smooth={true}
      duration={800}
      offset={10}
      className={clsx(
        "no-underline text-primary hover:text-hover transition-colors duration-300 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </ScrollLink>
  </li>
);
