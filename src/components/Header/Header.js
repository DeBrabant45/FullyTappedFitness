import React from "react";
import Link from "gatsby-link";
import HeaderNav from "./HeaderNav/HeaderNav.js";
import HeaderSocial from "./HeaderSocial/HeaderSocial.js";
import HeaderInfo from "./HeaderInfo/HeaderInfo.js";
import styles from "./Header.module.css";

export default class Header extends React.Component {
    render() {
      return (
          <header className={styles.headercontain}>
            <div className={styles.headercontent}>
                <div className={styles.headerwrap}>
                    <HeaderInfo />
                    <div className={styles.navlogo}>
                        <img src={require('../../images/oldLogo.png')}/>
                    </div>
                    <HeaderSocial />
                </div>
                <HeaderNav />
            </div>
          </header>
      );
    }
  }