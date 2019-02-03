import React, { Component } from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import styles from "./global.module.css";

export default ({ children }) =>
  <div>
    {children()}
  </div>