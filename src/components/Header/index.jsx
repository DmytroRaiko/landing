import React from 'react';
import Menu from "./Menu";
import LogoIcon from "../../icons/logo";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
  return (
    <header>
      <LogoIcon />
      <Menu />

      <HeaderButtons />
    </header>
  );
};

export default Header;
