import React from "react";
import Headline from "../components/Headline/Headline.js";
import ProgramWrap from "../components/Programs/ProgramWrap.js";
import Video from "../components/Video/Video.js";
import CoachWrap from "../components/Coaches/CoachWrap.js";


export default () => (
  <div>
    <Headline head="We are the #1 Performance Gym" detail1="No matter where you’re at in your fitness journey " detail2="we are here help you take it to the next level"/>
    <ProgramWrap />
    <Video url={require("../video/FTF_commercial.mp4")} />
    <CoachWrap />
  </div>
);