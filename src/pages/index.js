import React from "react";
import Headline from "../components/Headline/Headline.js";
import ProgramWrap from "../components/Programs/ProgramWrap.js";
import Video from "../components/Video/Video.js";
import CoachWrap from "../components/Coaches/CoachWrap.js";
import Coaches from "../components/Coaches/CoachInfo/Coaches.js";
import data from "../components/Coaches/Coachdata.js";
import Reviews from "../components/SlideShow/Reviews.js";
import Maps from "../components/Maps/Maps.js";
import Banner from "../components/Banner/Banner.js";
import Button from "../components/Button/Button.js";
import img from "../images/indexban.jpg";
import Layout from "../components/layout.js";


export default () => (
  <Layout>
    <Banner bgimg={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${img})` }} first="GYMS USE" second="MACHINES" third=" we build them"/>
    <Headline head="Voted #1 fitness facility in Oakland county 3 years in a row" detail1="No matter where you’re at in your fitness journey " detail2="we are here help you take it to the next level"/>
    <ProgramWrap />
    <Video />
    <CoachWrap title1="OUR COACHES" title2="Are the Best Professionals around">
      { data.map(coach =>
        <Coaches key={coach.name} img={coach.image} name={coach.name} level={coach.level} fblink={coach.facebook} iglink={coach.instagram} twlink={coach.twitter}>
          <Button to="/about/">GET DETAILS</Button>
        </Coaches> )}
    </CoachWrap>
    <Reviews />
    <Maps />
  </Layout>
);