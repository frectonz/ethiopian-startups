import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";

interface HeroProps {
  body: string;
  headline: string;
  linkText: string;
  linkHref: string;
  imageSrc: StaticImageData;
}

const Hero: React.FunctionComponent<HeroProps> = ({
  body,
  headline,
  linkText,
  linkHref,
  imageSrc,
}) => {
  return (
    <section className="my-16 mx-auto container grid gap-4 lg:grid-cols-2 grid-cols-1">
      <div className="flex flex-col justify-center p-4">
        <h3 className="text-3xl font-bold mb-10">{headline}</h3>
        <p className="text-lg">{body}</p>
        <div className="mt-10">
          <Link href={linkHref}>
            <a className="group bg-gray-500 rounded-md shadow-xl p-4 text-white">
              {linkText}
              <FaArrowRight className="inline ml-2 transform duration-500 group-hover:translate-x-2" />
            </a>
          </Link>
        </div>
      </div>
      <div className="filter grayscale p-4">
        <Image src={imageSrc} alt="Addis Abeba" />
      </div>
    </section>
  );
};

export default Hero;
