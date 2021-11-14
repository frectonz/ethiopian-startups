import Image from "next/image";
import * as React from "react";

import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGlobeAfrica,
} from "react-icons/fa";

import type { Startup } from "../interfaces/Startup";

interface StartupCardProps {
  startup: Startup;
}

const StartupCard: React.FunctionComponent<StartupCardProps> = ({
  startup: {
    name,
    logo,
    website,
    youtube,
    twitter,
    linkedIn,
    facebook,
    instagram,
    description,
  },
}) => {
  return (
    <div className="shadow-md p-4 flex flex-col justify-around">
      <div className="filter grayscale my-2">
        {/* eslint-disable-next-line */}
        <img src={logo} alt={`${name} logo`} />
      </div>
      <h1 className="text-3xl my-4 font-semibold">{name}</h1>
      <p className="font-light">{description}</p>
      <div className="my-4 flex text-gray-500 gap-4">
        {website && (
          <a href={website}>
            <FaGlobeAfrica className="mx-auto text-2xl" />
          </a>
        )}
        {linkedIn && (
          <a href={linkedIn}>
            <FaLinkedin className="mx-auto text-2xl" />
          </a>
        )}
        {twitter && (
          <a href={twitter}>
            <FaTwitter className="mx-auto text-2xl" />
          </a>
        )}
        {facebook && (
          <a href={facebook}>
            <FaFacebook className="mx-auto text-2xl" />
          </a>
        )}
        {instagram && (
          <a href={instagram}>
            <FaInstagram className="mx-auto text-2xl" />
          </a>
        )}
        {youtube && (
          <a href={youtube}>
            <FaYoutube className="mx-auto text-2xl" />
          </a>
        )}
      </div>
    </div>
  );
};

export default StartupCard;
