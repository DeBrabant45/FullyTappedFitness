import React, { Component } from "react";
import styles from "./HeaderInfo.module.css";
import MobileNav from "../HeaderNav/MobileNav.js";


const HeaderInfo = () => {
    return (
        <div className={styles.headerinfo}>
        <MobileNav />
            <div className={styles.mobilehide}>
              <h4><span>Mon-Thu:</span> 5:15am-8:30pm</h4>
              <h4><span>Fri:</span> 5:15am-7:30pm</h4>
              <h4><span>Sat:</span> 9:00am-11:00am</h4>
            </div>
        </div>
    );
}

export default HeaderInfo;