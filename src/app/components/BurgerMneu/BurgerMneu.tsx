import React from "react";
import styled from "styled-components";

const BurgerMenu = ({ isOpen, toggleMenu, scrolled }) => {
  //   const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <StyledWrapper isOpen={isOpen} scrolled={scrolled}>
      <label className="burger" htmlFor="burger">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={toggleMenu}
          id="burger"
        />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

interface StyledWrapperProps {
  isOpen: boolean;
  scrolled: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .burger {
    position: relative;
    width: 50px;
    height: 25px;
    background: transparent;
    cursor: pointer;
    display: block;
    // outline: 1px solid red;
    z-index: calc(infinity + 1);
  }

  .burger input {
    display: none;
  }

  .burger span {
    position: absolute;
    display: block;
    z-index: 10;

    height: 1px;
    width: 100%;

    background: ${({ isOpen, scrolled }) =>
      isOpen || scrolled ? "#fff" : "#fff"};
    border-radius: 9px;
    opacity: 100%;
    right: 0;
    transform: rotate(0deg);
    transition: 250ms ease-in-out;
    z-index: 1000;
  }

  .burger input:checked ~ span {
    background: #fff;
  }

  .burger span:nth-of-type(1) {
    height: 2px;
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    height: 2px;
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: -8px;
    left: 4px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    opacity: 0;
  }
  .burger span:nth-of-type(2) {
    width: 100%;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
`;

export default BurgerMenu;
