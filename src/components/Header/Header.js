import React from "react";
import HeaderNav from "./HeaderNav/HeaderNav.js";
import HeaderSocial from "./HeaderSocial/HeaderSocial.js";
import HeaderInfo from "./HeaderInfo/HeaderInfo.js";
import { NavLink } from 'react-router-dom'
import styles from "./Header.module.css";

export default class Header extends React.Component {
    render() {
      return (
          <header className={styles.headercontain}>
            <div className={styles.headercontent}>
                <div className={styles.headerwrap}>
                    <HeaderInfo />
                    <div className={styles.navlogo}>
                        <NavLink to="/">
                            <img src={require('../../images/oldLogo.png')}/>
                        </NavLink>
                    </div>
                    <HeaderSocial />
                </div>
                <HeaderNav />
            </div>
          </header>
      );
    }
  }