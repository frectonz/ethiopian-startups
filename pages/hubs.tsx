import type { GetServerSideProps, NextPage } from "next";

import MetaHead from "../components/MetaHead";
import CardDisplay from "../components/CardDisplay";

import { getHubs } from "../lib/hubs";
import type { Card } from "../interfaces/Card";

interface HubsProps {
  hubs: Card[];
}

const Hubs: NextPage<HubsProps> = ({ hubs }) => {
  return (
    <>
      <MetaHead title="Hubs" />

      <section id="headline">
        <h1 className="text-white text-3xl text-center filter drop-shadow-lg px-2">
          Ideas are easy. Implementation is hard.
        </h1>
      </section>

      <section className="container mx-auto my-24 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {hubs.map((hub, i) => (
          <CardDisplay key={i} card={hub} />
        ))}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HubsProps> = async () => {
  const hubs = getHubs();
  return {
    props: {
      hubs,
    },
  };
};

export default Hubs;
