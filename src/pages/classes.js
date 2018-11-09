import React from "react";
import ClassWrap from "../components/Class/ClassWrap.js";
import Banner from "../components/Banner/Banner.js";

export default () => (
  <div>
    <Banner bgimg={{ backgroundColor: 'black' }} first="WORLD CLASS" second="PROGRAMS" third="Choose a program"/>
    <ClassWrap />
  </div>
);