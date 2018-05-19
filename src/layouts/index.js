import React, { Component } from "react";
import Link from "gatsby-link";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

export default ({ children }) =>
  <div>
    <Header />
    {children()}
    <Footer />
  </div>