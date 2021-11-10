import * as React from "react";

// Components
import Logo from "./Logo";
import NavBar from "./NavBar";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="mx-auto mt-8 container grid lg:grid-cols-2 sm:grid-cols-1">
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
