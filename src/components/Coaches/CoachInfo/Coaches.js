import React from "react";
import Button from "../../Button/Button.js";
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
                <Button to="/about/">{props.name}</Button>
                <p>{props.level}</p>
                <p>{props.bio}</p>
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