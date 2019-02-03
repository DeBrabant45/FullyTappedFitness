import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";
import SMList from "../SocialMedia/SMList.js";
import Nav from "./Nav.js";

export default class Header extends React.Component {
    render() {
      return (
          <header className={styles.headercontain}>
            <div className={styles.headercontent}>
                <div className={styles.headerwrap}>
                    <div className={styles.headerinfo}>
                        <div className={styles.mobilehide}>
                            <h4><span>Mon-Thu:</span> 5:15am-8:30pm</h4>
                            <h4><span>Fri:</span> 5:15am-7:30pm</h4>
                            <h4><span>Sat:</span> 9:00am-11:00am</h4>
                        </div>
                    </div>
                    <div className={styles.navlogo}>
                        <NavLink to="/">
                            <img src={require('../../images/logo.png')}/>
                        </NavLink>
                    </div>
                    <div className={styles.info}>
                        <SMList />
                        <div className={styles.contactus}>
                            <span>Contact Us: </span> 
                            (248) 383-8117
                        </div>
                    </div>
                </div>
                <Nav />
            </div>
          </header>
      );
    }
  }