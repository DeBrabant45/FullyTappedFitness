import React from "react";
import ClassWrap from "../components/Class/ClassWrap.js";
import Banner from "../components/Banner/Banner.js";
import img from "../images/programs.png";

export default () => (
  <div>
    <Banner bgimg={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${img})` }} first="WORLD CLASS" second="PROGRAMS" third="Choose a program"/>
    <ClassWrap />
  </div>
);