import * as React from "react";

// Components
import Logo from "./Logo";
import NavBar from "./NavBar";

const links = [
  {
    text: "Start Ups",
    link: "/startups",
  },
];

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="mx-auto mt-4 container grid lg:grid-cols-2 sm:grid-cols-1">
      <Logo />
      <NavBar links={links} />
    </header>
  );
};

export default Header;
