import React from "react";
import ScheduleWrap from "../components/Schedule/ScheduleWrap.js";
import Banner from "../components/Banner/Banner.js";
import Contact from "../components/ContactForm/Contact.js";
import Color from "../components/Container/ColorContainer";
import Layout from "../components/layout.js";
import Container from "../components/Container/Container.js";

export default () => (
  <Layout>
    <Banner bgimg={{ backgroundColor: 'navy' }} first="CHECK OUT OUR MONTHLY" second="SCHEDULE" third="Book a class today"/>
    <ScheduleWrap />
    <Color>
      <Container>
        <Contact />
      </Container>
    </Color>
  </Layout>
);