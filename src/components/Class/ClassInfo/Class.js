import React from "react";
import Button from "../../Button/Button.js";
import styles from "./Class.module.css";


const Class = (props) => {
    return (
        <div className={props.classcontain}>
            <div className={props.classstyle} />
            <div className={styles.classinfo}>
                <div className={styles.classtext}>
                    <h2>{props.name}</h2>
                    <p>{props.info}</p>
                    <Button>GET DETAILS</Button>
                </div>
            </div>
        </div>
    );
}

export default Class;