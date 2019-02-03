import React from "react";
import WellnessWrap from "../components/Wellness/WellnessWrap.js";
import Banner from "../components/Banner/Banner.js";
import Layout from "../components/layout.js";

export default () => (
  <Layout>
    <Banner bgimg={{ backgroundColor: 'green' }} first="FIND" second="WELLNESS" third="We offer top notch services"/>
    <WellnessWrap />
  </Layout>
);