import React from "react";
import Button from "../../Button/Button.js";
import styles from "./Programs.module.css";

const Programs = (props) => {
    return(
        <div className={styles.contentservices}>
            <div className={styles.small}>
                <img src={props.images}/>
                <h3>{props.name}</h3>
                <Button to="/classes/">DETAILS</Button>
            </div>
        </div>
    );
}

export default Programs;