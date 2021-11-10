import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import ethiopic from "../public/ethiopic.svg";

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-20 mx-auto sm:mx-0 transform duration-500 hover:scale-125">
        <Link href="/">
          <a>
            <Image src={ethiopic} alt="Eth" />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>
            <h1 className="text-3xl my-5 text-center">Ethiopian StartUps</h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
