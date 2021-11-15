import type { GetServerSideProps, NextPage } from "next";

import CardDisplay from "../components/CardDisplay";
import MetaHead from "../components/MetaHead";

import { getStartups } from "../lib/startups";

import type { Card } from "../interfaces/Card";

interface StartupsProps {
  startups: Card[];
}

const Startups: NextPage<StartupsProps> = ({ startups }) => {
  return (
    <>
      <MetaHead title="Start ups" />

      <section id="headline">
        <h1 className="text-white text-3xl text-center filter drop-shadow-lg px-2">
          Ideas are easy. Implementation is hard.
        </h1>
      </section>

      <section className="container mx-auto my-24 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {startups.map((startup, i) => (
          <CardDisplay key={i} card={startup} />
        ))}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<StartupsProps> =
  async () => {
    const startups = getStartups();
    return {
      props: {
        startups,
      },
    };
  };

export default Startups;
