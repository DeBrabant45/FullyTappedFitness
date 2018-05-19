import React from "react";
import ListLink from '../../PageLink/ListLink.js'
import styles from "./HeaderNav.module.css";

const closeNav = () => {
  //document.getElementById("navside").style.width = "0";
  //document.getElementById("navdisplay").style.display = "none";
}

const HeaderNav = () => {
    return (
      <nav>
        <div id={styles.navside} className={styles.navpage}>
          <ul id={styles.navdisplay}>
            <li className={styles.closebtn}><a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}>&times;</a></li>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/classes/">Classes</ListLink>
            <ListLink to="/wellness/">Wellness</ListLink>
            <ListLink to="/schedule/">Schedule</ListLink>
            <ListLink to="/about/">About</ListLink>
          </ul>
        </div>
      </nav>
    );
}

export default HeaderNav;
