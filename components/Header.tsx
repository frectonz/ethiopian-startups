import { link } from "fs";
import * as React from "react";

// Components
import Logo from "./Logo";
import NavBar from "./NavBar";

const links = [
  {
    text: "Start Ups",
    link: "/startups",
  },
  {
    text: "People",
    link: "/people",
  },
  {
    text: "Investors",
    link: "/investors",
  },
  {
    text: "Hubs",
    link: "/hubs",
  },
  {
    text: "Groups",
    link: "/groups",
  },
];

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="mx-auto mt-8 container grid lg:grid-cols-2 sm:grid-cols-1">
      <Logo />
      <NavBar links={links} />
    </header>
  );
};

export default Header;
