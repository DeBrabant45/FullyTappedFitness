import React from "react";
import Container from "../Container/Container.js";
import styles from "./CoachWrap.module.css";


const CoachWrap = (props) => {
    return (
        <div className={styles.containercolor}>
        <Container>
            <h2>{props.title1}</h2>
            <h1>{props.title2}</h1>
            <div className={styles.coachservices}>
                {props.children}
            </div>
        </Container>
        </div>
    );
}


export default CoachWrap;