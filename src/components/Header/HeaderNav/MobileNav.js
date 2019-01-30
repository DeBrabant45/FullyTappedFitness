import React from "react";
import { slide as Menu } from 'react-burger-menu';
import ListLink from '../../PageLink/ListLink.js';
import styles from "./MobileNav.module.css";
import "./mb.css";

var isMenuOpen = function(state) {
    return state.isOpen;
  };
  
 const MobileNav = () => {
    return (
            <Menu className="bm-burger-button" className={styles.mobilenav} className={styles.navpage} onStateChange={ isMenuOpen } isOpen={ false }>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/classes/">Classes</ListLink>
              <ListLink to="/wellness/">Wellness</ListLink>
              <ListLink to="/schedule/">Schedule</ListLink>
              <ListLink to="/about/">About</ListLink>
              <br />
              <div>Hours of operation</div>
              <h4>MON-THU: 5:15am-8:30pm
                <br />
                FRI: 5:15am-7:30pm
                <br />
                SAT: 9:00am-11:00am
              </h4>
              <div>Phone number</div>
              <h4>(248) 383-8117</h4>
            </Menu>
    );
}
  
export default MobileNav;
