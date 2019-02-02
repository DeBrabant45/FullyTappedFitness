import React from "react";
import Link from "gatsby-link";
import styles from "./navlink.module.css"
import ListLink from '../PageLink/ListLink.js';
import SMList from "../SocialMedia/SMList.js";

const NavList = (props) => (
    <div className={styles.contain} style={props.show}>
        <ul className={styles.UnorderedList}>
            {props.children}
            <ListLink to="/">Home</ListLink>
            <ListLink to="/classes/">Classes</ListLink>
            <ListLink to="/wellness/">Wellness</ListLink>
            <ListLink to="/schedule/">Schedule</ListLink>
            <ListLink to="/about/">About</ListLink>
            <div className={styles.contact}>
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
            </div>
        </ul>
        <SMList media={styles.media}/>
    </div>
    )

export default NavList