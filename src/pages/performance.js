import React from "react";
import Performance from "../components/Class/Performance/Performance.js";
import Banner from "../components/Banner/Banner.js";

export default () => (
  <div>
    <Banner bgimg={{ backgroundColor: 'tan' }} first="DISCOVER" second="LIMITLESS" third="You dont have to be great to start"/>
    <Performance />
  </div>
);