import Leftside from "@/components/homepage/leftcomponents/leftside";
import Rightside from "@/components/homepage/rightcomponents/rightside";
// import Rightside from "./rightcomponents/rightside";
// import Leftside from "./leftcomponents/leftside";

import React from "react";

const Home = () => {
  return (
    <div className="h-[92%] w-[92%] flex bg-[url(https://us.images.westend61.de/0001162942pw/woman-working-on-laptop-at-home-office-top-view-MOMF00640.jpg)]">
      <Rightside />
      <Leftside />
    </div>
  );
};

export default Home;
