import type { GetServerSideProps, NextPage } from "next";

import MetaHead from "../components/MetaHead";
import StartupCard from "../components/StartupCard";

import { getStartups } from "../lib/startups";

import type { Startup } from "../interfaces/Startup";

interface StartupsProps {
  startups: Startup[];
}

const Startups: NextPage<StartupsProps> = ({ startups }) => {
  return (
    <>
      <MetaHead title="Start ups" />

      <section
        id="headline"
        className="bg-cover bg-center flex content-center justify-center py-40 filter grayscale"
      >
        <h1 className="text-white text-3xl text-center filter drop-shadow-lg px-2">
          Ideas are easy. Implementation is hard.
        </h1>
      </section>

      <section className="container mx-auto my-24 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {startups.map((startup, i) => (
          <StartupCard key={i} startup={startup} />
        ))}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<StartupsProps> =
  async () => {
    const startups = getStartups();
    console.log(startups);
    return {
      props: {
        startups,
      },
    };
  };

export default Startups;
