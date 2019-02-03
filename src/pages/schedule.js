import React from "react";
import ScheduleWrap from "../components/Schedule/ScheduleWrap.js";
import Banner from "../components/Banner/Banner.js";
import Layout from "../components/layout.js";

export default () => (
  <Layout>
    <Banner bgimg={{ backgroundColor: 'navy' }} first="CHECK OUT OUR MONTHLY" second="SCHEDULE" third="Book a class today"/>
    <ScheduleWrap />
  </Layout>
);