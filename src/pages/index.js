import React from "react";
import Headline from "../components/Headline/Headline.js";
import ProgramWrap from "../components/Programs/ProgramWrap.js";
import Video from "../components/Video/Video.js";
import CoachWrap from "../components/Coaches/CoachWrap.js";
import ReviewsWrap from "../components/Reviews/ReviewsWrap.js";
import Maps from "../components/Maps/Maps.js";
import Banner from "../components/Banner/Banner.js";


export default () => (
  <div>
    <Banner bgimg={{ backgroundColor: 'blue' }} first="DISCOVER" second="LIMITLESS" third="You dont have to be great to start"/>
    <Headline head="We are the #1 Performance Gym" detail1="No matter where you’re at in your fitness journey " detail2="we are here help you take it to the next level"/>
    <ProgramWrap />
    <Video url={require("../video/FTF_commercial.mp4")} />
    <CoachWrap />
    <ReviewsWrap />
    <Maps />
  </div>
);