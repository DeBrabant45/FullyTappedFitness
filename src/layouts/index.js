import React, { Component } from "react";
import Link from "gatsby-link";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Banner from "../components/Banner/Banner.js";
import styles from "./global.module.css";

export default ({ children }) =>
  <div>
    <Header />
    <Banner />
    {children()}
    <Footer />
  </div>