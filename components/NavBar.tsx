import Link from "next/link";
import React, { FunctionComponent } from "react";

interface NavLinkProps {
  text: string;
  link: string;
}

const NavLink: FunctionComponent<NavLinkProps> = ({ text, link }) => {
  return (
    <li className="transition duration-100 ease-out py-2 px-4 transform rotate-3 hover:rotate-0">
      <Link href={link}>
        <a>{text}</a>
      </Link>
    </li>
  );
};

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <nav className="py-1 sm:py-7">
      <ul className="flex justify-around flex-col sm:flex-row">
        <NavLink text="StartUp" link="/" />
        <NavLink text="People" link="/" />
        <NavLink text="VCs and Investors" link="/" />
      </ul>
    </nav>
  );
};

export default NavBar;
