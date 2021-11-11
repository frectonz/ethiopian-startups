import Image from "next/image";
import * as React from "react";

import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGlobeAfrica,
} from "react-icons/fa";

interface StartupCardProps {
  logo: StaticImageData;
  name: string;
  description: string;
  website: string;
  linkedIn: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

const StartupCard: React.FunctionComponent<StartupCardProps> = ({
  logo,
  name,
  website,
  twitter,
  facebook,
  linkedIn,
  instagram,
  description,
}) => {
  return (
    <div className="shadow-md p-4">
      <div className="grayscale filter my-2">
        <Image src={logo} alt="Shega" />
      </div>
      <h1 className="text-3xl my-4 font-semibold">{name}</h1>
      <p className="font-light">{description}</p>
      <div className="my-4 flex text-gray-500 gap-4">
        <a href={website}>
          <FaGlobeAfrica className="mx-auto text-2xl" />
        </a>
        <a href={linkedIn}>
          <FaLinkedin className="mx-auto text-2xl" />
        </a>
        <a href={twitter}>
          <FaTwitter className="mx-auto text-2xl" />
        </a>
        <a href={facebook}>
          <FaFacebook className="mx-auto text-2xl" />
        </a>
        <a href={instagram}>
          <FaInstagram className="mx-auto text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default StartupCard;
