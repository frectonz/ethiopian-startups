import type { GetServerSideProps, NextPage } from "next";

import MetaHead from "../components/MetaHead";
import CardDisplay from "../components/CardDisplay";

import { getVCs } from "../lib/VCs";
import type { Card } from "../interfaces/Card";

interface VCsProps {
  vcs: Card[];
}

const VCs: NextPage<VCsProps> = ({ vcs }) => {
  return (
    <>
      <MetaHead title="VCs" />

      <section id="headline">
        <h1 className="text-white text-3xl text-center filter drop-shadow-lg px-2">
          Ideas are easy. Implementation is hard.
        </h1>
      </section>

      <section className="container mx-auto my-24 p-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {vcs.map((vc, i) => (
          <CardDisplay key={i} card={vc} />
        ))}
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<VCsProps> = async () => {
  const vcs = getVCs();
  return {
    props: {
      vcs,
    },
  };
};

export default VCs;
