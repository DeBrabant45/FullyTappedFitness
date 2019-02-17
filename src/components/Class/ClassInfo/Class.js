import React from "react";
import styles from "./Class.module.css";


const Class = (props) => {
    return (
        <div className={props.classcontain}>
            <div className={props.classstyle} />
            <div className={props.classinfo}>
                <div className={styles.classtext}>
                    <h2>{props.name}</h2>
                    <p>{props.info}</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Class;