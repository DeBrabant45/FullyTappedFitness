import React from "react";
import Bootcamp from "../components/Class/Bootcamp/Bootcamp.js";
import Banner from "../components/Banner/Banner.js";

export default () => (
  <div>
    <Banner bgimg={{ backgroundColor: 'teal' }} first="WE OFFER" second="THE BEST" third="Bootcamp around"/>
    <Bootcamp />
  </div>
);