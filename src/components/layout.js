import React, { Component } from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

export default ({ children }) =>
  <div>
    <Header />
        {children}
    <Footer />
  </div>