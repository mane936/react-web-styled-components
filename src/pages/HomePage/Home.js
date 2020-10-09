import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
  return (
    <div>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Pricing />
    </div>
  );
};

export default Home;
