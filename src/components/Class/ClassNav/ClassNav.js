import React from "react";
import ListLink from "../../PageLink/ListLink.js";
import styles from "./ClassNav.module.css";
import performance from "../../../images/Performance.svg";
import personaltraining from "../../../images/PersonalTraining.svg";
import bootcamp from "../../../images/BootCamp.svg";


const ClassNav = (props) => {
    return (
        <div className={styles.cnav}>
            <ul>
                <ListLink to="/performance/">
                    <img src={performance}/>
                    <p>Performance Training</p>
                </ListLink>
                <ListLink to="/bootcamp/">
                    <img src={bootcamp}/>
                    <p>Boot Camp</p>
                </ListLink>
                <ListLink to="/personaltraining/">
                    <img src={personaltraining}/>
                    <p>Personal Training</p>
                </ListLink>
            </ul>
        </div>
    );
}

export default ClassNav;