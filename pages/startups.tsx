import type { NextPage } from "next";

import MetaHead from "../components/MetaHead";
import StartupCard from "../components/StartupCard";

import shega from "../public/shega.png";

const Startups: NextPage = () => {
  return (
    <>
      <MetaHead title="Start ups" />

      <section
        style={{
          backgroundImage: "url(/northern-mountains.jpg);",
        }}
        className="bg-cover bg-center flex content-center justify-center py-40 filter grayscale"
      >
        <h1 className="text-white text-3xl text-center filter drop-shadow-lg px-2">
          Ideas are easy. Implementation is hard.
        </h1>
      </section>

      <section className="container mx-auto my-24 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <StartupCard
          name="Shega"
          logo={shega}
          description="
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        dicta, quibusdam quam omnis voluptate non, ratione vero error cum,
        labore nobis! Fugiat vel voluptatum facilis quam, sunt, numquam commodi
        nobis necessitatibus repellat, aperiam nam id ea! Suscipit corrupti, sed
        quos, molestiae ab quo, eveniet inventore eos recusandae dolorem odit
        culpa?
        "
          twitter=""
          website=""
          facebook=""
          linkedIn=""
          instagram=""
        />
      </section>
    </>
  );
};

export default Startups;
