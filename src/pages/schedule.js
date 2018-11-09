import React from "react";
import ScheduleWrap from "../components/Schedule/ScheduleWrap.js";
import Banner from "../components/Banner/Banner.js";

export default () => (
  <div>
    <Banner bgimg={{ backgroundColor: 'navy' }} first="CHECK OUT OUR MONTHLY" second="SCHEDULE" third="Book a class today"/>
    <ScheduleWrap />
  </div>
);