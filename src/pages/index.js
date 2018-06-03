import React from "react";
import { Link } from "react-router-dom";
import Programs from "../components/Programs/Programs";
import Container from "../components/Container/Container.js";
import Button from "../components//Button/Button.js";
import Headline from "../components/Headline/Headline";

export default () => (
  <div>
    <Headline head="We are the #1 Performance Gym" detail1="No matter where you’re at in your fitness journey" detail2="we are here help you take it to the next level">
      <Button to="/about/">GET DETAILS</Button>
    </Headline>
    <Programs/>
  </div>
);