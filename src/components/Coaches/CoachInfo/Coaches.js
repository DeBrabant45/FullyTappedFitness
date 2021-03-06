import React from "react";
import Facebook from "../../SocialMedia/SMButtons/FBButton.js";
import Instagram from "../../SocialMedia/SMButtons/IGButton.js";
import Twitter from "../../SocialMedia/SMButtons/TWButton.js";
import styles from "./Coaches.module.css";


const Coaches = (props) => {
    return (
        <div className={styles.medium}>
            <div>
                <img src={props.img}/>
            </div>
            <div className={styles.textcontain}>
                <h3>{props.name}</h3>
                <p>{props.level}</p>
                <p>{props.bio}</p>
                {props.children}
                <div className={styles.coachsm}>
                    <Facebook to={props.fblink}/>
                    <Instagram to={props.iglink}/>
                    <Twitter to={props.twlink}/>
                </div>
            </div>
        </div>
    );
}

export default Coaches;