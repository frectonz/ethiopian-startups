import * as React from "react";
import Image from "next/image";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import creativeCommons from "../public/creative-commons.png";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer className="bg-gray-500">
      <section className="container mx-auto px-4 py-14 text-white">
        <div>
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            <Image alt="Creative Commons License" src={creativeCommons} />
          </a>
          <p className="mb-5">
            This work is licensed under a{" "}
            <a
              rel="license"
              className="underline"
              href="http://creativecommons.org/licenses/by/4.0/"
            >
              Creative Commons Attribution 4.0 International License
            </a>
            .
          </p>
        </div>

        <div>
          <h1 className="text-2xl my-4 font-semibold">Contact Us</h1>
          <div className="flex">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/frectonz"
            >
              <FaGithub className="text-3xl my-2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/frectonz"
            >
              <FaTwitter className="text-3xl m-2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/fraol-lemecha/"
            >
              <FaLinkedin className="text-3xl my-2" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
