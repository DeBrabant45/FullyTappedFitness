import React, { Component } from "react";
import styles from "./HeaderInfo.module.css";
import MobileNav from "../HeaderNav/MobileNav.js";

const gymHours = () => {
    let hours;
    let date = new Date();
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = weekday[date.getDay()];
    if (today === 'Friday') {
        hours = '5:15AM - 7:30PM';
    }
    else if (today === 'Saturday') {
        hours = '9:00AM - 11:00AM';
    }
    else {
        hours = '5:15AM - 8:30PM';
    }
    return today + ' ' + hours;
};


const HeaderInfo = (props) => {
    return (
        <div className={styles.headerinfo}>
        <MobileNav />
            <div className={styles.mobilehide}>
                <div>
                    {gymHours()}
                </div>
                <br />
                <div>(248) 383-8117</div>
            </div>
        </div>
    );
}

export default HeaderInfo;