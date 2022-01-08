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

interface NavBarProps {
  links: { text: string; link: string }[];
}

const NavBar: FunctionComponent<NavBarProps> = ({ links }) => {
  return (
    <nav className="py-1 sm:py-7">
      <ul className="flex justify-around flex-col sm:flex-row">
        {links.map((link, i) => (
          <NavLink key={i} text={link.text} link={link.link} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
