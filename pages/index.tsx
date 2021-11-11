import type { NextPage } from "next";

import Hero from "../components/Hero";
import MetaHead from "../components/MetaHead";

import addisAbeba from "../public/addis-abeba.jpg";

import { FaPoll, FaDoorOpen, FaPeopleCarry } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <MetaHead />
      <Hero
        linkHref="/startups"
        linkText="Go to startups"
        headline="The big list of Ethiopian startups."
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis
        fuga porro deserunt repellat eaque expedita officiis, soluta vitae
        eius quia, voluptate laboriosam ipsum quo? Itaque aut, animi facere
        minus, fugiat vero saepe culpa repellat dolores, aliquid est
        distinctio laudantium."
        imageSrc={addisAbeba}
      />

      <section className="my-24 p-4 mx-auto container grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="shadow-lg p-5 border-t-2 border-opacity-25  border-gray-500">
          <FaPoll className="text-6xl text-gray-500 mx-auto md" />
          <h1 className="text-center my-10 text-xl font-semibold">
            Find New Markets
          </h1>
        </div>
        <div className="shadow-lg p-5 border-t-2 border-opacity-25 border-gray-500">
          <FaPeopleCarry className="text-6xl text-gray-500 mx-auto" />
          <h1 className="text-center my-10 text-xl font-semibold">
            Connect with People
          </h1>
        </div>
        <div className="shadow-lg p-5 border-t-2 border-opacity-25 border-gray-500">
          <FaDoorOpen className="text-6xl text-gray-500 mx-auto" />
          <h1 className="text-center my-10 text-xl font-semibold">
            Explore Opportunities
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
