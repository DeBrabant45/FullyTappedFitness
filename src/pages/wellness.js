import React from "react";
import WellnessWrap from "../components/Wellness/WellnessWrap.js";
import Banner from "../components/Banner/Banner.js";

export default () => (
  <div>
    <Banner bgimg={{ backgroundColor: 'green' }} first="FIND" second="WELLNESS" third="We offer top notch services"/>
    <WellnessWrap />
  </div>
);