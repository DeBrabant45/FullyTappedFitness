import React from "react";
import Banner from "../components/Banner/Banner.js";
import Video from "../components/Video/Video.js";
import CoachWrap from "../components/Coaches/CoachWrap.js";
import Coaches from "../components/Coaches/CoachInfo/Coaches.js";
import data from "../components/Coaches/Coachdata.js";
import Tour from "../components/SlideShow/Tour.js";
import Contact from "../components/ContactForm/Contact.js";
import Color from "../components/Container/ColorContainer.js";
import Container from "../components/Container/Container.js";
import Layout from "../components/layout.js";


export default () => (
  <Layout>
    <Banner bgimg={{ backgroundColor: 'purple' }} first="TAKE A LOOK AT WHAT WERE" second="ABOUT" third="Tour our Gym today"/>
    <Video />
    <CoachWrap title1="MEET OUR" title2="COACHES">
      { data.map(coach =>
        <Coaches key={coach.name} img={coach.image} name={coach.name} level={coach.level} bio={coach.bio} fblink={coach.facebook} iglink={coach.instagram} twlink={coach.twitter}/> )}
    </CoachWrap>
    <Tour />
    <Color>
      <Container>
        <Contact />
      </Container>
    </Color>
  </Layout>
);