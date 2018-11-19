import React from "react";
import Banner from "../components/Banner/Banner.js";
import Video from "../components/Video/Video.js";
import CoachWrap from "../components/Coaches/CoachWrap.js";
import Coaches from "../components/Coaches/CoachInfo/Coaches.js";
import data from "../components/Coaches/Coachdata.js";

export default () => (
  <div>
    <Banner bgimg={{ backgroundColor: 'purple' }} first="TAKE A LOOK AT WHAT WERE" second="ABOUT" third="Tour our Gym today"/>
    <Video />
    <CoachWrap title1="MEET OUR" title2="COACHES">
      { data.map(coach =>
        <Coaches key={coach.name} img={coach.image} name={coach.name} level={coach.level} bio={coach.bio} fblink={coach.facebook} iglink={coach.instagram} twlink={coach.twitter}/> )}
    </CoachWrap>
  </div>
);