import React from "react";
import PersonalTrain from "../components/Class/PersonalTrain/PersonalTrain.js";
import Banner from "../components/Banner/Banner.js";
import Layout from "../components/layout.js";

export default () => (
  <Layout>
    <Banner bgimg={{ backgroundColor: 'gray' }} first="DISCOVER" second="LIMITLESS" third="You dont have to be great to start"/>
    <PersonalTrain />
  </Layout>
);