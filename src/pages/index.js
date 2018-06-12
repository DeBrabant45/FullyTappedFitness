import React from "react";
import Headline from "../components/Headline/Headline.js";
import Button from "../components//Button/Button.js";
import Programs from "../components/Programs/Programs.js";
import Video from "../components/Video/Video.js";
import Coaches from "../components/Coaches/Coaches.js";


export default () => (
  <div>
    <Headline head="We are the #1 Performance Gym" detail1="No matter where you’re at in your fitness journey " detail2="we are here help you take it to the next level">
      <Button to="/about/">GET DETAILS</Button>
    </Headline>
    <Programs/>
    <Video url={require("../video/FTF_commercial.mp4")}/>
    <Coaches/>
  </div>
);