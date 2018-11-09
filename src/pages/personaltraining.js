import React from "react";
import PersonalTrain from "../components/Class/PersonalTrain/PersonalTrain.js";
import Banner from "../components/Banner/Banner.js";

export default () => (
  <div>
    <Banner bgimg={{ backgroundColor: 'gray' }} first="DISCOVER" second="LIMITLESS" third="You dont have to be great to start"/>
    <PersonalTrain />
  </div>
);